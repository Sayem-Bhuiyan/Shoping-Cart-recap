const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');

    const product = productField.value;
    const quantity = quantityField.value;

    productField.value = '';
    quantityField.value = '';

    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity)
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li)
}

const getStoredProduct = () => {
    let cart = {};
    const storedCart = window.localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredProduct();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const showProductFromLocalStorage = () => {
    const savedCart = getStoredProduct();
    for(const product in savedCart){
        const quantity = savedCart[product];
        displayProduct(product, quantity);
    }
}
showProductFromLocalStorage()
const listaJSON = sessionStorage.getItem('carrito');
const listaRecuperada = JSON.parse(listaJSON);
console.log(listaRecuperada);
let shoppingCart2 = new ShoppingCart()
listaRecuperada.forEach(element => {
    shoppingCart2.addToCart(element.productID)});
actualizarMenuDesplegable(shoppingCart2)
counterCart.textContent = shoppingCart2.productsCart.length.toString()
function actualizarTotalEnTiempoReal() {
    const totalSpan = document.getElementById('totalPrice');
    setInterval(function () {
        const total = shoppingCart2.calculateTotal();
        totalSpan.textContent = `US$${total.toFixed(2)}`; 
        actualizarMenuDesplegable(shoppingCart2)
        counterCart.textContent = shoppingCart2.productsCart.length.toString()
    
    }, 1000);
}
actualizarTotalEnTiempoReal();
function actualizarSubtotalTiempoReal(){
    const totalSpanSubtotal = document.getElementById('totalPriceSubtotal');
    const totalSpanTaxes = document.getElementById('totalPriceTaxes');
    const totalSpanFinal = document.getElementById('totalPriceFinal');
    const total = shoppingCart2.calculateTotal();
    totalSpanSubtotal.textContent = `US$${(total.toFixed(2))}`;
    totalSpanTaxes.textContent = `US$${(total.toFixed(2))*0.15}`;
    totalSpanFinal.textContent = `US$${Math.round(((total)*0.15) + total)}`;

}
;
function actualizarCarritoEnTiempoReal(cart) {
    setInterval(function () {
        guardarCarrito(cart)
    }, 1000);
}
actualizarCarritoEnTiempoReal(shoppingCart2);

function actualizarProductosEnCarrito() {
    const cartProductsDiv = document.getElementById('cart_products');
    cartProductsDiv.innerHTML = '';
    if (shoppingCart2.productsCart.length === 0) {
        const emptyCartMessage = document.createElement('p');
        emptyCartMessage.textContent = 'There is no products in your cart.';
        cartProductsDiv.appendChild(emptyCartMessage);
        let sectionOcultar = document.getElementById("subtotal_cart");
        sectionOcultar.classList.add("hidden")
    } else {
        shoppingCart2.productsCart.forEach((producto, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product'); 
            const productName = document.createElement('h3');
            productName.textContent = producto.productName;
            const description = document.createElement('p');
            description.textContent = producto.description;
            const price = document.createElement('p');
            price.textContent = `Price: US$ ${producto.price.toFixed(2)}`;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            
            deleteButton.addEventListener('click', () => {
                shoppingCart2.productsCart.splice(index, 1);
                actualizarProductosEnCarrito();
            });
            productDiv.appendChild(productName);
            productDiv.appendChild(description);
            productDiv.appendChild(price);
            productDiv.appendChild(deleteButton);
            cartProductsDiv.appendChild(productDiv);
        });
        document.getElementById("subtotal_cart").style.display="block"
    actualizarTotalEnTiempoReal()
    actualizarSubtotalTiempoReal()    }
}
actualizarProductosEnCarrito();
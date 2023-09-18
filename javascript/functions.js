//Code to add a menu when mouse is on shopping cart icon
let counterCart = document.getElementById("counter-cart")
counterCart.textContent = shoppingCart.productsCart.length.toString()
function actualizarMenuDesplegable(shoppingCart) {
    let dropdownCartMenu = document.getElementById("dropdown-menu-cart")
    let textoagregado = ""
    shoppingCart.productsCart.forEach(element =>{
        textoagregado += `<div class="white_text d-flex flex-row justify-content-between lg_bottom_bordered mb-3">
        <span class="dropdown-item-text white_text w-45">${element.productName}</span>
        <span class="dropdown-item-text white_text w-45">USD$${element.price}</span></div>`
    } )
    dropdownCartMenu.innerHTML = textoagregado + `<div class="d-flex flex-row justify-content-between p-4">
    <h4 class="white_text">Total: </h4><span class="white_text">USD$${shoppingCart.calculateTotal()}</span></div>`
}        
//Code to storage the shopping cart   
function guardarCarrito(cart){
    let copyCart = cart.productsCart
    sessionStorage.setItem("carrito", JSON.stringify(copyCart))
}  
function obtenerCarrito(){
    const listaRecuperada = JSON.parse(sessionStorage.getItem("carrito"))
    let shoppingCart = new ShoppingCart()
    for (let objeto in listaRecuperada){
        shoppingCart.addToCart(objeto)
    }
    return shoppingCart
}                                                 
function actualizarCarritoEnTiempoReal(cart) {
    setInterval(function () {
        guardarCarrito(cart)
    }, 1000);
}

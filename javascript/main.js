
//Code to the function of the buttons "buy" for the products
function createEventBuyButtons(){
    const botonesCompra = document.querySelectorAll(".button_buy");
    botonesCompra.forEach(boton => {
        boton.addEventListener("click", () => {
            const productId = boton.parentElement.getAttribute("data-product-id");
            shoppingCart.addToCart(productId);
            counterCart.textContent = shoppingCart.productsCart.length.toString()
            actualizarMenuDesplegable(shoppingCart);
        });
        boton.addEventListener('click', () => {
            Toastify({
                text: "The product was added to your cart!",
                duration: 3000,
                gravity: 'top',
                position: 'right',
                style: {
                    background: "linear-gradient(to right, black, green)",
                },
            }).showToast();
        })  
    });
}
//Code for the filters and products section
let filtersContainer = document.getElementById("home_section_filter")
filtersContainer.innerHTML += ""
categoriesStore.forEach(category => {
    filtersContainer.innerHTML += `<div class="form-check white_text pl-4 pr-3 my-2"><input type="checkbox" class="form-check-input filter_category" id="filter-applied-${category}" value="${category}" data-categoria="${category}"><label class="form-check-label" for="filter_applied_${category}">${category}</label></div>`
});
const checkboxes = document.querySelectorAll('.filter_category');
const contenedorProductos = document.getElementById('home_section_products');
const mensajeNoProductos = document.getElementById('mensaje-no-productos');

function mostrarProductosFiltrados() {
    const categoriasSeleccionadas = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.getAttribute('data-categoria'));
    const productosFiltrados = products.filter(producto => {
        return categoriasSeleccionadas.includes(producto.productCategory);
    });
    contenedorProductos.innerHTML = '';
    if (productosFiltrados.length === 0) {
        mensajeNoProductos.style.display = 'block';
    } else {
        mensajeNoProductos.style.display = 'none';
        productosFiltrados.forEach(product => {
        contenedorProductos.innerHTML += `
            <div class="product_container d-flex flex-column white_text text-center justify-content-around">
                <h2 class="productNamet">${product.productName}</h2>
                <div class="price_button_container d-flex justify-content-around vertical-align-center" data-product-id="${product.productID}">
                    <p class="d-flex align-content-center marginpadding0">USD$${product.price}</p>
                    <button class="button_buy white_text rounded-lg green-bordered font-weight-bold">BUY</button>
                </div>
            </div>`;
        });
    }
    createEventBuyButtons() //Call the function of event for buttons to update everytime a filter is added
}
//Add event of change for the checkboxes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', mostrarProductosFiltrados);
});
mostrarProductosFiltrados();
actualizarCarritoEnTiempoReal(shoppingCart)
//Preentrega N° 1 - Tomas Agustin Romero
let shoppingCart = "Carrito\n"
const products = "HAMBURGUESAS\n1. Hamburguesa Simple\t$1500\n2. Hamburguesa Doble\t$1800\n3. Hamburguesa Triple\t$2000\nLOMOS\n4. Lomo Tradicional\t$2100\n5. Lomo Completo\t$2300\nGuarniciones\n6. Papas Fritas\t$800\n7. Papas Fritas con cheddar y bacon\t$1100\n8. Papas fritas al caballo\t$1000\nIngrese el numero de la comida para agregarla al carrito(1-8).\nIngrese 'atras' para volver atras."
const options = "Seleccione la opcion a seguir segun la letra ingresada:\nA. Mostrar productos del local\nB. Mostrar información del local\nC. Mostrar carrito de compras\nD. Comprar Carrito"
let finishedClient = "False"
let totalprice = 0
function showOptions(){
    optionsMenu = prompt(options)
    if (optionsMenu == 'A'){
        defineProduct(showProducts())
    }else if (optionsMenu == 'B'){
        alert("Horarios\nLunes/Viernes: 12:00 - 23:00\nSabado/Domingo: 19:00 - 23:00\nUbicación\nAv. Libertador 185 - San Rafael, Mendoza, Argentina")
    }else if(optionsMenu == 'C'){
        alert(shoppingCart)
    }else if(optionsMenu == 'D'){
        let introducedCupon = prompt(shoppingCart + "¿Tiene un cupon de descuento? Aplique su cupon de descuento, si no tiene ingrese '0'")
        buyShoppingCart(introducedCupon)
    }else{
        alert("No se ha ingresado una opcion valida.")
        finishedClient = "False"
    }
}
let menuOption = ""
function showProducts(){
    menuOption = prompt(products)
    return(menuOption)
}
function defineProduct(numberofoption){
    let costo = 0
    if (numberofoption == "1"){
        productDefined = "Hamburguesa Simple"
        costo = 1500
    }
    else if (numberofoption == "2"){
        productDefined = "Hamburguesa Doble"
        costo = 1800
    }
    else if (numberofoption == "3"){
        productDefined = "Hamburguesa Triple"
        costo = 2000
    }
    else if (numberofoption == "4"){
        productDefined = "Lomo Tracidional"
        costo = 2100
    }
    else if (numberofoption == "5"){
        productDefined = "Lomo Completo"
        costo = 2300
    }
    else if (numberofoption == "6"){
        productDefined = "Papas Fritas"
        costo = 800
    }
    else if (numberofoption == "7"){
        productDefined = "Papas Fritas con cheddar y bacon"
        costo = 1100
    }
    else if (numberofoption == "8"){
        productDefined = "Papas Fritas al caballo"
        costo = 1000
    }
    else if (numberofoption == "atras"){
        productDefined = ""
        costo = 0
    }else{
        alert("No se ha ingresado una opcion valida.")
        productDefined = ""
        costo = 0
    }
    if (productDefined != "" && costo != 0){
        addShoppingCart(productDefined + "\t$ " + costo.toString())
        totalprice = totalprice + costo
    }
}
function addShoppingCart(itemToAdd){
    shoppingCart = shoppingCart + itemToAdd + "\n";
}
function buyShoppingCart(cupon = "0"){
    const usecupon = cupon
    if (usecupon != "0"){
        totalprice = totalprice - (totalprice * 0.20)
    }
    alert("Se ha realizado la compra correctamente por $" + totalprice)
    finishedClient = "True"
}
while (finishedClient == "False"){
    showOptions();
}
alert("Se ha realizado todo correctamente")
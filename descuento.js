
function calcularPrecioConDescuento (precio,descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const preioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return preioConDescuento;
}

function calcPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;


    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const calcular = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("resultPrice");
    resultP.innerHTML = calcular;



}


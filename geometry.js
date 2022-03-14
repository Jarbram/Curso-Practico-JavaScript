console.group("Cuadrado");
function perimetroCuadrado(lado){
    return lado * 4;
} 
function areaCuadrado(lado){
    return lado *lado;
}  
console.groupEnd();

//Codigo del Triangulo

console.group("Triangulo");
function perimetroTriangulo(lado1, lado2, base){
   return (lado1 + lado2 + base);
}
function areaTriangulo (base, altura){
    return (base *altura)/2
}
console.groupEnd();

//Codigo del Triangulo Isosceles

console.group("Triangulo Isosceles");

function alturaTriangulo(lado,base){
    return (Math.sqrt((lado*lado)-((base*base)/4)));
}

console.groupEnd();

//Codigo del Circulo
console.group("Circulo")

function diametroCirculo(radio){
    return radio * 2;
}
const PI = Math.PI;
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro *PI;
}
function areaCirculo (radio){
    return (radio*radio)*PI;
}
console.groupEnd();

//Aqui iteractuamos con el Html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    const resultP = document.getElementById("resultCuadradoPerimetro");
    resultP.innerHTML = perimetro;

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    const resultP = document.getElementById("resultCuadradoArea");
    resultP.innerHTML = area;
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTrianguloLado1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTrianguloLado2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputTrianguloBase");
    const value3 = Number(input3.value);
    const perimetro = perimetroTriangulo(value1,value2,value3)
    const resultP = document.getElementById("resultTrianguloPerimetro");
    resultP.innerHTML = perimetro;

}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTrianguloBase");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTrianguloAltura");
    const value2 = Number(input2.value);
    const area = areaTriangulo(value1,value2)
    const resultP = document.getElementById("resultTrianguloArea");
    resultP.innerHTML = area;
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculoRadio");
    const value = Number(input.value);
    const perimetro = perimetroCirculo(value);
    const resultP = document.getElementById("resultCirculoPerimetro");
    resultP.innerHTML = perimetro;
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculoRadio");
    const value = Number(input.value);
    const area = areaCirculo(value);
    const resultP = document.getElementById("resultCirculoArea");
    resultP.innerHTML = area;
}

function calcularAlturaTriangulo(){
    const input1 = document.getElementById("InputTrianguloLado");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTrianguloBaseA");
    const value2 = Number(input2.value);
    const altura = alturaTriangulo(value1, value2);
    const resultP = document.getElementById("resultTrianguloAltura");
    resultP.innerHTML = altura;
}
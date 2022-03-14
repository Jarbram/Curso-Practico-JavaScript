function calcularMediaAritmetica() {
    // let sumaLista = 0;
  
    // for (let i = 0; i < lista.length; i++) {
    // sumaLista = sumaLista + lista[i];
    // }
  
  // Se captura los datos del html y se guardan los valores dentro de una variable
    const entradaDatos = document.getElementById("inputPromedio");
    const datosValue = entradaDatos.value;
    //   console.log(datosValue);
  //   Al ser un String los valores capturados, se procede a convertir el formato a Number 
    let arrayValor = Array.from(datosValue.split(","), Number);
    //   console.log(arrayValor);
  
  //   Procedemos a realizar la suma total de los valores obtenidos en el html mediante el metodo reduce() de array
    const sumaLista = arrayValor.reduce(function (valorAcumulado = 0,nuevoElemento) {
      // console.log(valorAcumulado);
      // console.log(nuevoElemento);
          return valorAcumulado + nuevoElemento;
    });
  //   Obtenemos la media aritmetica 
    const promedioLista = sumaLista / arrayValor.length;
  
  //   Enviamos los resultados obtenidos a la pagina html para su visualizacion
    const mostrarResultado = document.getElementById("resultadoMedia");
    mostrarResultado.innerText = "La media es de: " + promedioLista;
  }
    
  
  
    function calcularMediana() {
      // Se captura los datos del html y se guardan los valores dentro de una variable
        const entradaMediana = document.getElementById("inputMediana");
        const medianaValue = entradaMediana.value;
      // Al ser un String los valores capturados, se procede a convertir el formato a Number 
        let arrayMediana = Array.from(medianaValue.split(","), Number);
      //   Ordenamos los valores de la lista desordenada mediante el metodo sort() de menor a mayor
        const listaOrdenada = arrayMediana.sort((numMenor, numMayor) => numMenor - numMayor);
      //   console.log(listaOrdenada);
      // Hallamos la mitad de la cantidad de elemento de mi lista obtenida del HTML y lo redondeamos en caso sea decimal con la funcion parseInt()
        const mitadLista = parseInt(listaOrdenada.length / 2);
      //   console.log(mitadLista);
      
      // Creamos la funcion esPar para verificar si la lista es par o impar
        function esPar(numerito) {
          if (numerito % 2 === 0) {
            return true;
          } else {
            return false;
          }
        }
      
        let mediana;
      // Si la lista es par procedemos hallar la mediana mediante esta forma de lo contrario seguiriamos con el else
        if (esPar(listaOrdenada.length)) {
          const elemento1 = listaOrdenada[mitadLista - 1];
          const elemento2 = listaOrdenada[mitadLista];
      // Llamamos a la funcion calcularMediaAritmetica() con los elementos1 y elementos2 como parametros y lo guardamos como la variable mediana
          const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
          mediana = promedioElemento1y2;
        } else {
          mediana = listaOrdenada[mitadLista];
        }
        //   Enviamos los resultados obtenidos a la pagina html para su visualizacion
        const mostrarResultado = document.getElementById("resultadoMediana");
        mostrarResultado.innerText = "La mediana es de: " + mediana;
      }
      
      function calcularModa() {
        entradaModa = document.getElementById("inputModa");
        modaValue = entradaModa.value;
      
        let arrayValor = Array.from(modaValue.split(","), Number);
      
        const listaContador = {};
      
        arrayValor.map(function (elemento) {
          if (listaContador[elemento]) {
            // listaContador[elemento] = listaContador[elemento] + 1;
            listaContador[elemento] += 1;
          } else {
            listaContador[elemento] = 1;
          }
        });
      
        const listaArray = Object.entries(listaContador).sort(function (elementoA, elementoB) {
          return elementoA[1] - elementoB[1];
        });
      
        const moda = listaArray[listaArray.length - 1];
        
        const mostrarResultado = document.getElementById("resultadoModa");
        mostrarResultado.innerText = "La moda es de: " + moda + "veces se repite";
      }
      
  
//57 FUNCIONES DE TIPO FLECHA EMA-S6
//Declaración Funcoin de tipo Expresión

let sumar = function (a, b) {
  return a + b;
};
console.log(sumar);

//Compara las variables de tipo flecha y los de tipo expresoin
//Con las variables flecha es mejor utilizar const
//funcion flecha con argumetnos,
/*
Definimos una funcion flecha constante
const sumarFuncionTipoFlecha
luego igualamos para realizar una funcion y podemos omitir el nombre de la funcion, solo indicamos parametros/argumentos 
=> Simbolo flecha seguido de que se indica lo que se desea realizar y ya no es necesario utilizar return 
*/
const sumaFuncionTipoFlecha = (a, b) => a + b;

let ss = sumaFuncionTipoFlecha(123, 3);
console.log(ss);

//--

const restarFuncionTipoFlecha = (a, b, c) => a + b - c;
ss = restarFuncionTipoFlecha(312, 1, 53);
console.log(ss);

const imprimirEnConsola = (texto, entrada) =>
  console.log(texto + " " + entrada);

imprimirEnConsola(ss);

var arreglos = [];
const addToArregloValor = (arreglo, entrada) => arreglo.push(entrada);
addToArregloValor(arreglos, 1);
imprimirEnConsola("imprimir un arreglo que contiene: ", arreglos);

addToArregloValor(arreglos, 2);
imprimirEnConsola("Imprimir un arreglo que contiene: ", arreglos);

const conocerTamanioArreglo = (arreglo) => arreglo.length;
imprimirEnConsola("Tamanio arreglo", conocerTamanioArreglo(arreglos));

const funcionTipoFl = (a, b) => a + b;
imprimirEnConsola("Fecla: ", funcionTipoFl(23, 3));

//Una funcion es un codigo que se puede volver a ejecutar tanttas veces como sea necesario

//Declaracion de la funcion
function miFuncion(a, b) {
  /*Cuerpo de la funcion */
  console.log("Suma -> " + (a + b));
}

//los bloques de codigo no terminan con ;

let s = miFuncion(123, 321);
console.log(s);

function miFuncions(a, b) {
  let a1;
  a1 = a + b;
  return a;
}

let ss = miFuncions(123, 123);
console.log(ss);

//Hoisting -> Podemos declarar la funcion en cualquier parte del programa, mediante esta herramienta de Hoisting
// se puede utilizar en cualquier parte en donde se encuentre (Antes de definirla y despues de definirla)
//mueve la declaración al inicio del programa para que podamos utilizarla

//53
//Return dentro de las funciones.

//FUNCIONES DE TIPO EXPRESION O FUNCIONES ANONIMAS
//con el nombre de una variable podemos crear una funcion anónima, esto se utiliza mucho con HTML y CSS
let x = function (a, b) {
  return a + b;
};
console.log(x);

let resultado = x(123, 3);
console.log(resultado);

//55 FUNCIONES SELF-INVOKING
//Son funciones que se invocan ellas mismas
//Tambien se definen como funciones anonimas ellas mismas, pero estas funciones no se pueden volver a utilziar
//solo se mande a llamar la funcion a alla misma y no pude ser reutilziada
(function () {
  console.log("Ejecutando la funcion");
})();

(function (a, b) {
  console.log("Ejecutando" + " " + (a + b));
})(123, 3);

//56 FUNCIONES COMO OBJETOS
console.log(typeof miFuncion);

//una funcion se puede describir como objetp, podemos coner cuantos argumentos tiene la funcion
//console.log(arguments.length miFuncion());
//arguments.length, es una propiedad que solo puede ser utilizada dentro de la funcion, para poder realizar esta pregunta

function mFuncion(a, b) {
  let s = a + b;
  console.log(arguments.length);
  return s;
}
let ss1 = mFuncion(1, 123);

//Metodo o funcion es exactamente lo mismo, con esto se puede escribir como cadena de texto una funcion
//Las funciones al tambien ser objetos tienen propiedades y metodos
var miFuncionTexto = mFuncion.toString();
console.log(miFuncionTexto);

/**Claback 113
 * es una funcion que se pasa como parametro a otra funcion para
 * poder llamar a otra funcion, recibiendo como argumento el valor de otra funcion
 *
 * //!funcion de llamar de vuelta, pero se recibe como argumento una funcion
 * foo(,, function(){
 * //callback function
 * do mome stuff
 *
 *  callback
 * })
 */

//Analogia a funcion simple para las funciones normales dentro de JS
function miFuncion1() {
  console.log("Funcion1");
}

function miFuncion2() {
  console.log("funcion2");
}

//las llamadas a las funcione son secuenciasles
//primero llama a la funcion 1 y luego a la funcion 2
//Hoisting llamar desde cualquie lugar del codigo.

miFuncion1();
miFuncion2();

//------------------------------------------------------------------------
//Funciones de tipo CallBack: dentro de una funcion mandamos a llamar otra funcion
function imprimir(mensaje) {
  console.log(mensaje);
}

function sumar(op1, op2, funcionCallback) {
  let res = op1 + op2;
  //console;
  funcionCallback(`Resultado: ${res}`);
}

//pasamos los argumentos 1 ,2 y el tercero es otra funcion, solo indicamos el nombre de la funcion
sumar(5, 3, imprimir);

//Forma II de declararlo como una variable, y luego la pasamos como parametro de referencia
let imp = function imPrim(mens) {
  console.log("impr-> " + mens);
};

function sumarConCall(op1, op2, funcionCallBack) {
  let res = op1 + op2;
  funcionCallBack(" kekeke" + res);
}

sumarConCall(123, 32, imp);

//EX1
//funcion de tipo callback
function escribe(mensaje) {
  //console.log("Funcion de llamada > "+mensaje);
  console.log({ nombre: "Funcion de llamada > " + mensaje, valor: mensaje });
  //return ({ nombre: "Funcion de llamada > " + mensaje, valor: mensaje});
}

function operacionMath(op1, op2, op3, funcionCallBack) {
  let res;

  res = op1 + op2 * op3;

  funcionCallBack(`Resultado: ${res}`);
}

operacionMath(11, 2, 3, escribe);

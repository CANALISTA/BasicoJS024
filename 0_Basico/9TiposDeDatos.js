/*
Ejemplos de tipos de datos en JS
*/
//Tipo de dato String
var nombre = "carlos";
nombre += nombre;
console.log(nombre);
console.log("la variable nombre tiene un tipo" + typeof nombre);
//Tipo Objeto
var persona = {
  nombre: "Pedro",
  edad: 17,
  telefono: 12292,
};
console.log(persona.nombre);
persona["nombre"] = "Alison";
persona["edad"] = 11;

console.log(persona.nombre);
console.log(typeof persona.nombre);

console.log(persona.edad);
console.log(typeof persona.edad);

for (var i = 0; i < 12; i++) {
  console.log("Valor es " + i);
}

//Forma 2 de objeto
var myObj = new Object(),
  str = "m",
  rand = Math.random(),
  obj = new Object();

console.log(typeof myObj);

myObj.type = "Sintaxis de puntos";
console.log(myObj.type);
console.log(typeof myObj.type);

myObj["rand"] = 123;
console.log(myObj.rand);
console.log(typeof myObj.rand);

let oo = 123123;
console.log(oo);
console.log(typeof oo);

//Tipo de dato booleano(true, false)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato funcion
function miFuncion() {}

console.log(typeof miFuncion);

//Tipo de datos Symbol,
//Se crea un valor unico de una variable
var simbolo = Symbol("Mi simbolo");
console.log(typeof simbolo);
console.log(simbolo);

//Definir las clases
//las clases tambien son funciones
//Se definiran mediante un constructor que nos
class tPersona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

console.log(typeof tPersona);
console.log(tPersona);

//Tipo undefined
//Esto lo tenemos cuando creamos cualquier variable por defecto
//Esto es un tipo de dato y tambien es el contenido de una variable
var x;
console.log(typeof x);
console.log(x);

//undefined, tambien podemos ustar este tipo de variable, si no asignamos
//un valor a la variable este tomara el valor undefined
var y = undefined;
console.log(y);
console.log(typeof y);

//null -> Ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

//
var prsn = { nombre: "jhyna ", apellido: "havbks" };
console.log(prsn.nombre);
console.log(typeof prsn.nombre);

var bolean = true;
console.log(bolean);
console.log(typeof bolean);

bolean = "asasdasdasd";
console.log(bolean);
console.log(typeof bolean);

class tPs {
  constructor(nombre, apellido, edad, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.telefono = telefono;
  }
}
tFuncion(bandera);

function tFuncion(p1) {
  console.log("Variable ->" + p1);
  console.log("Variable ->" + typeof p1);
}

class tClass {
  constructor(nombre, edad, telefono, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.telefono = telefono;
    this.genero = genero;
  }
}

//Mas tipos de datos en JS

//Arreglos

var autos = ["asd", "er", "erer", "aqqw", "reaee"];
console.log(autos[0]);

console.log(typeof autos);

let tama = autos.length;
console.log(tama);

for (var i = 0; i < tama; i++) {
  console.log(
    "En la posicion " + i + " contiene el elemento" + autos[i].toStrg()
  );
}

//Los arreglos dentro JS son tipos Objetos
//para evitar que se tenga el tipo undefed dentro de las variables, podemos utilizar ''
var z = "";
console.log(typeof z + " Con el valor de " + z);
console.log(z);

//concatener cadenas
var nombre = "juan";
var apellido = "perez";
var ncompleto = nombre + " " + apellido;
console.log(ncompleto);

console.log(nombre + " " + apellido);

//las expresiones se evaluan de IzquierdaADerecha
//->
var x = 123 + 123;
console.log(x + " : " + typeof x);

console.log(nombre + x);

//Si queremos que lo conctanene dentro de la suma
//Si queremos que nos concatene un strg y luego opere el resultado
//debemos de añadir el valor dentro de ()
var operacion = nombre + apellido + " " + ((x + 1) * 50) / 3;
console.log(operacion);

//
operacion = ((x + 1) * 50) / 3 + " " + nombre;
console.log(operacion);

//concatenar texto
var res = "";
res = nombre + apellido;
console.log(res);

let persona = { nombre: "abc", apellido: "Aasas", telefono: 121321 };
let persona1 = { nombre: "def", apellido: "Basas", telefono: 121321 };
let persona2 = { nombre: "def", apellido: "Basas", telefono: 121321 };
let persona3 = { nombre: "ghi", apellido: "Casas", telefono: 121321 };
let persona4 = { nombre: "jkl", apellido: "Dasas", telefono: 121321 };
let persona5 = { nombre: "mno", apellido: "Easas", telefono: 121321 };
console.log(persona);

console.log(persona.nombre + " " + persona.apellido);

///
var arreglo = ["Ana de armas", "Yuvana Montalvo", "Paola Rivera"];
let tarrego = arreglo.length;
for (var i = 0; i < tarrego; i++) {
  console.log("Contiene en la posicion " + i + ": " + arreglo[i].toStrg());
}

var arregloPersona = [persona1, persona2];
console.log(arregloPersona);

var tamAP = arregloPersona.length;
var tamP1 = persona1.length;
var npaso;
console.log(tamAP);
console.log(tamAP);

/*
for (var i = 0; i < tamAP; i++) {
    console.log(i);
    npaso = arregloPersona[0][1].toStrg();
    console.log(npaso);
    for (var ii = 0; ii < arregloPersona[i].length; ii++) {
      
    console.log("Posicion " + i + " ->" + arregloPersona[ii]);
  }
}
*/

//Podemos escribir tipicamente lo siguiente para recorrer los arrays
for (tamAP  arregloPersona) {
  console.log(arregloPersona[tamAP]);
}

for (persona2.length  persona2) {
  console.log(persona2[persona2.length].toStrg());
}

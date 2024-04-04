let persona = { nombre: "abc", apellido: "Aasas", telefono: 121321 };
let persona1 = { nombre: "def", apellido: "Basas", telefono: 121321 };
let persona2 = { nombre: "def", apellido: "Basas", telefono: 121321 };
let persona3 = { nombre: "ghi", apellido: "Casas", telefono: 121321 };
let persona4 = { nombre: "jkl", apellido: "Dasas", telefono: 121321 };
let persona5 = { nombre: "mno", apellido: "Easas", telefono: 121321 };

var arregloPersona = [persona1, persona2];
console.log(arregloPersona);

var tamAP = arregloPersona.length;
var tamP1 = persona1.length;
var npaso;
console.log("Array de objeto " + tamAP);
console.log("Array persona " + tamAP);

//Podemos escribir tipicamente lo siguiente para recorrer los arrays
//FOR IN
for (tamP1 in persona1) {
  console.log("in -> " + persona1[tamP1].toString());
}
for( var i= 0; i<3; i++){
  arregloPersona[i]
}
//console.log("sss " + persona1[1].nombre.toString());

for (var ls = 0; ls < tamP1; ls++) {
  console.log("sss" + persona1[1]);
}

///la busquedea es poder leer un arreglo de objetos dentro de JS utlizando la metodlogia acutal
///
tmPers = persona1.length;

for (tmPers in persona4) {
  console.log(persona1[tmPers].toString());
}

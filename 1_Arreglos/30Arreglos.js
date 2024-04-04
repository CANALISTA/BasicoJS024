//Arreglo es un un tipo Object que permite alamacenar varios valores
//Existen diferentes sitanxis

//Esto ya no se utiloza
let aAutos = new Array("bmw", "mercedes", "volvo");

const aAutos2 = ["ks", "lel", "lsa"];
console.log(aAutos2); //[ 'ks', 'lel', 'lsa' ]

console.log(aAutos2[0]);
console.log(aAutos2[1]);
console.log(aAutos2[2]);

//añadir un nuevo elemento, no es una buena practica es posible dejar elemntos vacios,
//no dejar elementos vacios en memoria, si no tiene valores anterioers, dejare espacios
//varios hasta llegar al índice que le indiquemos
aAutos2[3] = 123132;
console.log(aAutos2); //["ks", "lel", "lsa", 123132];
console.log(JSON.stringify(aAutos2));
//

//Recorrer todos los elementos
let taAutos2 = aAutos2.length;
console.log(taAutos2);
for (taAutos2 in aAutos2) {
  console.log(aAutos2[taAutos2]); //["ks","lel","lsa",123132]
}

for (let i = 0; i <= taAutos2; i++) {
  console.log(aAutos2[i]);
}

//Mostar la consola CNT+ SHIT + U

//Modificar elementos de un arreglo y añadir mas
aAutos2[0] = "DX/";
console.log(JSON.stringify(aAutos2));

//Añadir elementos, se añade al final de este elmento
aAutos2.push("EE");
console.log(JSON.stringify(aAutos2));

taAutos2 = aAutos2.length;
console.log(taAutos2);

//Largo del arrreglo
let zt = taAutos2 + 1;
console.log(typeof zt);
aAutos2[zt] = "Sampler";

console.log(JSON.stringify(aAutos2));

aAutos2.push("Cms");
console.log(JSON.stringify(aAutos2));
//--

//Forma 2 de largo del arreglpo, sin que dejemos espacios vacios
console.log(aAutos2.length);
aAutos2[aAutos2.length] = "XP";
console.log(JSON.stringify(aAutos2));
//

//Remover elemento del arreglo si lo analizamos que se comporta como un pila
let elemtn = aAutos2.pop();
console.log(elemtn);
console.log(JSON.stringify(aAutos2));
//

//--Preguntar si estamos trabajando con un arreglo, solo define que es un objetp
console.log(typeof aAutos2);
//
let ss = Array.isArray(aAutos2);
console.log(ss);
//
//mediante una palabra reservada, preguntamos que tipo de datos es 
ss = (aAutos2 instanceof Array);
console.log(ss); 
//--


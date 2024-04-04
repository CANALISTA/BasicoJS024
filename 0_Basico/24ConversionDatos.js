//converitir a int
let edad = 123;
let conver = Number(edad);
console.log(typeof +"   ->  " + edad);

let persona1 = { nombre: "Juan", edad: 123 };
let persona2 = { nombre: "Pedro", edad: 32 };

let ComparaObjeto = persona1 === persona2 ? "Correcto" : "Nada";
console.log(ComparaObjeto);

let ComparaObjeto_ = persona1 !== persona2 ? "Correcto" : "Nada";
console.log(ComparaObjeto_);

let ress =
  JSON.stringify(persona1) == JSON.stringify(persona2) ? "YEA" : "NAda";
console.log(ress);

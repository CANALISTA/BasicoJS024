//verifica que sea un tipo de número

let miNumero = "18x";
console.log(typeof +"__" + miNumero);

//Esto se conoce como un NAN -> Not A Number
let edad = Number(miNumero);
console.log(edad);

//Como podemos corregirlo mediante el uso de IsNAN

if (isNaN(miNumero)) {
  console.log("No es un numero");
} else {
  console.log("Si es un numoer");
}

//Verificar que sea un tipo numero

let miNumero = "18x";
console.log(typeof miNumero); //Esto se conoce como NAN Not A Number

let edad = Number(miNumero);
console.log(edad);

//Como podemos corregirlo mediante es IsNAN

if (isNaN(edad)) { console.log("NO es un numero"); } else { console.log("Correct");  }
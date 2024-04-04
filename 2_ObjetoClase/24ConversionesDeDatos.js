//lo ideal es compar valores con valores,

let miNumero = 10;

console.log(typeof miNumero);

//Converitr a int
let edad = Number(miNumero);
console.log(edad);
console.log(typeof edad)

if (edad >= 18) {
    console.log("Puede votar"); 
} else console.log("No puede votar");

let validaEdad = (edad >= 28) ? "Puede Votar" : "No Puede Votar"
console.log(validaEdad);

let perosna1 = { nombre: "ksj", edad: 12 };
let perosna2 = { nombre: "ksj", edad: 12 };

let comparaObjeto = (perosna1 === perosna2) ? "Exacto" : "nada"
console.log(comparaObjeto)

let ress = (JSON.stringify(perosna1) == JSON.stringify(perosna2)) ? "ok" : "wa"
console.log(ress)


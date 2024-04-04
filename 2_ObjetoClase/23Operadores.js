//Tipos de datos
//=== compara que el tipo de datos sean iguales (Operador de identidad)
//== compara que el contenido sea igual (operador de comparador debil)
//!= si las variables son distintas (Diferencia debil)
//!== si los valores y los tipos son diferente (Difernecia estricta)
//!=== revisa los tipos
//JS hace un conversion para procesar los tipos de datos, 
let a = 1, b = 1;

let z = a != b;
console.log(z)


let z1 = a !== b
console.log(z1)


//Cuando se comparan objetos o array, los objetos son mucho mas completo
//que los valores primitivos, al comparar objetos comparamos referencias
//se hace una referencia a la misma posicion en memoria,
//Cuando compararmos objetos, solo puede ser verdaero mediante

var s1 = { nombre: 'Quijote' };
var s2 = s1;

let z2 = s1 === s2;
console.log(z2)

/* Para comparar objetos */
//se puede verificar los objetos mediante la 
//string Json o tambien se puede utilziar una liberia

let sq = { nombre: 123, lele: 21231 };
let sq2 = { nombre: 123, lele: 21231 };

if (JSON.stringify(sq) == JSON.stringify(sq2)) {
    console.log("Correcto")
}
else
    console.log("fals")

    /* o tambien se puede utilziar  Lodash que escanea todos los objetos por todas sus propiedades,  */

 //&& AND
let aa = 4;
let valMin = 0, valMax = 10;

if (aa > valMin && aa <= valMax) { console.log("Dentro del rango") }
else { console.log("Fuera del rango"); }

//las expresiones de lado izquierdo deben ser verdadeeras, luego compara las de la derecha
let aa1 = -1;
let valMin1 = 0, valMax1 = 10;

if (aa1 > valMin && aa1 <= valMax) { console.log("Dentro del rango") }
else { console.log("Fuera del rango"); }


//Operador ternario es
//Condicion? Expr1 : Expre2

let resultado = (3 > 2) ? "Verdadero" : "Falso";

console.log(resultado)

let ops = ("JOÑAS" == "ls") ? "Iguales" : "No iguales";
console.log(ops)

let numero = 9;
let res = (numero % 2 == 0) ? "Es Par" : "Es Impar";
console.log(res);



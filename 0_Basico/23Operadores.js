//Tipos de datos
//=== compara que el tipo de datos sean iguales(Opeador de identidad)
//== compara que el contenido sea igual (Operador de comparador debil)
//!= si las variables son distintas(Diferencia Debil)
//!== Si los valores y los tipos son diferente (Diferencia estricta)
//!=== revisa los tipos de datos
//Js hace una conversion para procesar los tipos de datos.

let a = 1,
  b = 1;
let z = a != b;
console.log("Comparación de diferencia debil " + z);

let z1 = a !== b;
console.log("Comparación de diferencia estricta " + z1);

/*Cuando se compara objetos o arrays, los objetos son mucho más completos 
    que los valores primitivos que se comaparan, al comparar objetjos comparamos
    referencias, se hace una referencia a la posicion en memoria. 
    Cuando comparamos objetos, solo puede ser comparados mediante:; 


*/

var s1 = { lels: 22, lele: 123123 };
var s2 = s1;
var s3 = { lels: 22, lele: 123123 };
console.log(s1);

let z2 = s1 == s2;
console.log(z2);

if (JSON.stringify(s1) == JSON.stringify(s3)) {
  console.log("Correcto");
}

//Operador ternario
let resultado = 2 < 1 ? "true" : "fals";
console.log(resultado);

let n1 = "lala",
  n2 = "lalal";
let rs = n1 == n2 ? "True" : "false";
console.log(rs);

let n11 = "lalal",
  n21 = "lalal";
let rs1 = n11 == n21 ? "True" : "false";
console.log(rs1);

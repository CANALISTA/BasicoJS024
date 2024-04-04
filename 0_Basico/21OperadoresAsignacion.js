//Operadores de asignacion
//Las expresiones literales se evaluan de izquierda a drecha

let a = 1;
console.log(a);

//Operador de asignacion compuesto
a += 3; //En cuanto deseamos incrementar la variable
//-> a=a+3;
console.log("Añadiendo valor " + a);

//restar un valor
a -= 1; //a=a-1;
console.log("Restandole valor " + a);

//mutliplica valor
a *= 3; //a=a*3;
console.log("Multiplica el valor " + a);

//Divide el valor
a /= 2; //a= a/2;
console.log("Divide el valor " + a);

//Potencia valor
a **= 3;
console.log("potencia valor " + a)

if (a === 91.125) {
    
    console.log("Correcto")
} else {
    
     console.log("fake");
}



if (a ===! 91.12) {
  console.log("Correcto");
} else {
  console.log("fake");
}

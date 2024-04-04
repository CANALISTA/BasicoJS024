//27Ciclos


//Switch: si se compara el tipo de dato de la entrada de las variables mediante las comparaciones estricatas 

let mes = 4;
let esta = 'lsls';

switch (mes) {

    case 1: case 2: case 12:
        esta = 'Invur'
        break;

    case 3: case 4: case 5:
        esta = 'Primvare'
        break;

}
console.log(esta);


//Ciclos
//vamos a necesitar de una variable que sera el contador para teminar la expresion 


let contador = 0;

while (contador < 3) { console.log("asas " + contador); contador++; }



//Do While
//Ejecuta codigo a repeitr mientras se tenga la condicion a repetir, por lo menos se ejecuta una vez

let contador1 = 0;
do {
    console.log(". " + contador1);
    contador1++;
} while (contador1 < 4) {
    console.log("Fin ciclo");
}


//Uso de la palabra break, para romper un ciclo 
for (let contador = 0; contador <= 10; contador++) {

    if (contador % 2 == 0) {
        console.log(contador)
    }

}


//Imprimir el primer numero par que tenemos

for (let contador = 0; contador <= 10; contador++) {

    if (contador % 2 == 0) {
        console.log(contador)
        break;
    }

}


//Palabra continue, valida si no es un número par
//!== comparacion estricta 
for (let con = 0; con <= 10; con++) {

    if (con % 2 !== 0) {
        continue; //Ir a la siguiente iteracion  dle ciclo 
    }
    else {
        //Si es igual a par; 
        console.log(con)
    }
}
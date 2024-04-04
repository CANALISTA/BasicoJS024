//cilos
/*Switch: si se compara el tipo de dato de la entrada de las variables medidante las comparaciones estrictas
 */
let mes = 4;
let esta = "lsls";

switch (mes) {
  case 1:
  case 2:
  case 12:
    esta = "Invierno";
    break;

  case 3:
  case 4:
  case 5:
    esta = "Primavera";
    break;
}

console.log(esta);

//Ciclos, vamos a necesitar una varialb que sera el contador para terminar la expreison

let contador = 0;
while (contador < 3) {
  console.log("Imprime " + contador);
  contador++;
}

//DoWhile
//Ejecuta código a repetir mientras se tenga la condición a repetir, por lo menos esto se ejecuta una vez

contador = 0;
do {
  console.log(". " + contador);
  contador++;
} while (contador < 4);
{
  console.log("Termina el ciclo");
}

//Break
//Uso de la palabra break es para romper un ciclo

//Nùmeros pares
for (let cont = 0; cont <= 10; cont++) {
  if (cont % 2 == 0) {
    console.log(cont);
  }
}


//Numeros impares
for (let cc = 0; cc <= 10; cc++) {
    if (cc % 2 !== 0)
         console.log(cc); 
}
//Uso de la palabra break

for (let cn = 0; cn < 3; cn++) {
  console.log(cn);
}
console.log("Fin del ciclo For");

//break -> [Termina por completo el ciclo FOR]
//Permite romper un ciclo, en donde solo imprimimos el primer numero par
//con lo cual ya no continua con los demas nùmeros 2,4,6,8,10
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
    break;
  }
}

//Continue
//solo imprimir los nùmeros pares
//si no es un número par, se saldra de la funcion y continara con el siguiente número
//comparamos de manera estricta
for (let cont = 0; cont <= 10; cont++) {
  if (cont % 2 !== 0) {
    //Pregunta si es un número par
    continue; //Ir a la siguinete ireacion del ciclo for
  } else {
    console.log(cont);
  }
}

for (let con = 0; con <= 100; con++) {
  if (con % 2 == 0) {
    continue;
  } else {
    console.log(con);
  }
}

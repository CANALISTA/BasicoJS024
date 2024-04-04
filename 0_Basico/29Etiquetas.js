//Etiquetas
/*NO es recomendable el uso de las mismas, podemos indicar que valla a una parte del programa 
que deseemos  */
//Impar
for (let cont = 0; cont <= 20; cont++) {
  if (cont % 2 == 0) {
    continue;
  } else {
    console.log(cont);
  }
}

//Par sin etiqueta
for (let cont = 0; cont <= 20; cont++) {
  if (cont % 2 !== 0) {
    continue;
  } else {
    console.log(cont);
  }
}

//Par con etiqueta: indica que se redireccione al inicio del donde encuenta la etiqueta, con el valor
//esto se conoce como GOTO
inicio: for (let cont = 0; cont <= 20; cont++) {
  if (cont % 2 !== 0) {
    continue inicio;
  } else {
    console.log(cont);
  }
}

//Par con etiqueta: indica que se redireccione al final del donde encuenta la etiqueta
inicio: for (let cont = 0; cont <= 20; cont++) {
  if (cont % 2 !== 0) {
    break inicio;
  } else {
    console.log(cont);
  }
}

/* hoisting permite que podamos crear metodos que aun no se han creado, se restringe a que no puede 
ser utilizado con las funciones de flecha*/

/*Podemos tantos argumentos como  */
let resultado = sumarTodo(5, 4, 3, 2, 1);
console.log(resultado);

function sumarTodo() {
  let suma = 0;

  for (let i = 0; i < arguments.length; i++) {
    //obtenemos el valor de cada argumento, mediante la propiedad del areglo
    suma += arguments[i];
  }

  return suma;
}

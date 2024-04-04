//Paso por valor y Paso por refrencia

/*
Paso por valor cuando utilziamos tipos que no son objetos, y enviamos argumentos a dichas funciones
*/

let x = 20; //Valor Primitivo, no tienen ni atributos no metodos asociados

function cambiarValor(a) {
  a = 20;
  console.log(a);
  //no es necesario añadir el return el lo hace de forma impliciata return que regresa el contorl a la línea que hizo la llamada 

  //cuando termina este método se destruye esta variable ya que esta variable se creo dentro del metodoç
}

cambiarValor(x);

console.log(x);
/** Paso por valor, es cuando una variable que tiene dato primitivo solo paso una copia de su valor
 * a la variable a
 */


function cambVilaor(a) {
    let s; 
    (a == 20) ? s = "true" : s = "false";
    return s;
    
}

console.log(x); 
console.log(cambVilaor(x)); 

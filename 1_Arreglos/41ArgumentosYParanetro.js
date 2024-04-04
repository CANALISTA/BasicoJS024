//Parmetro y argumentos : se puede decir que son iguales o equivalentes pero tiene una diferencia
/* 
Parametro[Lista de variables que definimos cuando declaramos nuestra funcion ]
Cuando declaramos una funcion y ella lleva () seguido de variables, se llama parametros a la lista de parametros 
que pasamos a la funcion.

Argumentos-> son los valores que pasamos a la funcion cuando mandamos a llamar a una funcion */

function fnArgumentos(a, bc) {
  let z = arguments[0]; //Accedemos al valor del primer argumento
  let z1 = arguments[1]; //Accedemos al valor del segundo argumetno
  console.log(z);
  console.log(z1);
  return a + bc;
}

let z = fnArgumentos(123, 3);
console.log(z);

/* No es necesario pasar todos los valores de un argumento a una funcion */
let z2 = fnArgumentos("", 3);
console.log(z2);

/*Para ello es necesario que podemos definrle a las funciones los valores por defecto 
 para que con ello se pueda evitar el erro NotANumber NAN*/
function fnArgumentos2(a = 0, bc = 0, cd = 0) {
  let z = arguments[0]; //Accedemos al valor del primer argumento
  let z1 = arguments[1]; //Accedemos al valor del segundo argumetno
  console.log("-<>"+ z);
  console.log("-<>" + z1);
  console.log("-<>" + arguments[2]);
   
    return a + bc + arguments[2];

  
}

let z3 = fnArgumentos2('1','1' , 11);
console.log("ss " +  z3);

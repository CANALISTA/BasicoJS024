//Sintaxis basica para la declarar las variables
//var -> Ya casi no se usa ahora ha sido reemplazado let o const

//Se utiliza let para declarar variables
let nombre = "Juan";
ls = "Pedro"; //Esto no es una buena practica

console.log(nombre);
console.log(ls);

//const -> se utiliza para decalar valores constantes
const apellido = "OSO";
//apellido = "123";

/*Es recomendable utilizar CamelCase, en donde, si se tiene 2 palabras que
conforman una variable se debe de utilizar la segunda palabra la con la leta
mayuscula y la primera debe de se en minuscula ->CamelCAse, notacion de camello
(Cada una de las palabras que componen la notación, debe de ir en letra 
    mayuscula,excepto la primera letra de la primer palabra )
*/

let nombreCompleto = "Juan lsls";
console.log(nombreCompleto);
console.error(nombreCompleto);

//Podemos declarar variables en una misma linea
let x, y;
(x = 12), (y = 123);
let sumaXY = x + y;
console.log(sumaXY);

//incremento

//Pre-Incremento (El operador ++ antes de la variable)
let pre = 1;
console.log(pre);
++pre;
console.log(pre);
//Post-Incremento (El operador ++ despues de la variable)

let post = 1;
console.log(post);
post++;
console.log(post);

//Decremento
//Pre (El operador -- va antes de la variable)
//Post (El operador  va despues de la variable)

console.log(--post);

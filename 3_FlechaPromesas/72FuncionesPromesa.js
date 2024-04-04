//116
'use strict';


//Funciones promesa tipo
//Es requerido de las funciones callback y funciones flecha


/**Funcion promesa
 * Vamos a utilziar funciones de tipo callback, 
 * una promesa es una funcio que tiene varios estados 
 * Para procesar un codigo en caso de que la promesa: 
 * halla sido resulta correctamente (RESOLVED .then) o que 
 * halla sido rechazada (REJECTED .catch()) tiene un error 
 * 
 * Mientras la promesa no halla termindo de ejecutar esta en estado 
 * Pendiente 
 */


//PROMESAS∫
//SINTAXIS BASICA
/** 1.- Crer una variable
 *  2.- Crear una funcion promesa
 *  3.- Se envia una funcion de tipo arrowFunction, para cuando lo acepte o lo rechaze
 * se recomienda cerra la creaecion del objeto
 */



let miPromesa = new Promise((resolve, reject) => {
    let expres = true; //

    if (expres) {
        resolve('Resolvio como correcto ');
    } //solo se declara la promesa, para porsteriroemte poder utilizar
    else {
        reject('Se produjo un error');
    }
});

//recibe 2 funciones de tipo flecha

miPromesa.then(
    valor => console.log(valor) //simplemente imprimimos el valor
    ,
    error => console.log(error)
);


let miPromesa2 = new Promise((resolve, reject) => {
    let expr = false; //
    if (expr) {
        resolve('OK 200 OK');
    } else {
        reject('404 Not Found');
    }
});


// miPromesa2.then(
//     valor => console.log(valor),
//     error => console.log(error)
//     );



//tambien exista otra forma de poder declarar la
//Otra sitaxis dentro dle cual tengamos el catch
miPromesa2.then(valor => console.log(valor)).catch(error => console.log(error));
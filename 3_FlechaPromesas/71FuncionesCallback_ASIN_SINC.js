"use strict";

/*
 * Funciones SetTimeOut en JS
 * para que puede ser utilizados dentro de procesos asincronos.
 *
 * Sincrono->que se ejecutan una linea a la vez,
 *
 * Callback-> llamamos una funcion, luego llamamos a otra que puede seguri trabajando
 * para poder ejecutar varios proceos por separado(procesos asincronocs)
 * primero llamaremos a un flujo luego este llamara a un segundo flujo
 *  */

//llamadas asincroncas con el uso de SetTimeOut(nos permite iniciar una nueva tarea segun el tiempo que defina)
//llamaremos a la funcion sumar lluego, llamaremos a la funcion de imprimirDatos

function miFuncionCallback() {
  console.log("Saludo asincrono despues de 3 segudnos ");
}

//I
//cuando la pasamos como referencia no es necesario add(), 300 milisegundos
setTimeout(miFuncionCallback, 3000);

//Podemos tener varios procesos que se ejecutan en paralelo, con setTimeout se puede mandar a llamar a otra funcion

//II
//tambien puede recibir directamente la funcion
setTimeout(function () {
  console.log("saludo asincrono despues de 2 segundos ");
}, 2000);

//III
//arrowFunction

setTimeout(() => {
  console.log("saludo asincrono 10 segundos");
}, 5000);

// todo depende del orden del tiempo y no del tiempo en el cual se disparan las llamadas de tipo callback

///115 SetIntervalTime
/**Sincrona, [Waiting for reponse]]
 *           tenemos una llamada de un cliente a un servidor dentro del cual le solicita una conexion
 *           el cliente no puede realizar ninguna otra funcion en dentro del timpo tipo
 *           hasta que el servidor le responde la solicitud, el cliente puede terminar
 *
 * Asincrona, [Asynchrnous, Continue working]
 *            un cliente realiza una peticion en un tiempo t y en lo que el servidor le reponde
 *            el cliente puede continuar realizando otras funciones u otros procesos
 *            Get Response and do something,
 *            Puden contiunar el flujo de los proceos sin que se detenga, ambas funciones pueden trabajar por separado
 */

//set interval manda a llamar varias veces la funcion en un tiempo definido

let reloj = () => {
    let fecha = new Date();
   console.log(`${fecha.getHours() } : ${fecha.getMinutes()} : ${fecha.getSeconds()}`);
 };

setInterval(reloj, 1000);


let contador =()=>{
  let ffecha= new Date(); 
  console.log(` ${fecha.getMinutes()}`);
  console.log(ffecha);
}

setInterval(reloj, 1000);
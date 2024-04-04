//promesa,await, async  y timeout


async function functionConPromesaAwaitTimeout() {

    let miPromesa = new Promise(resolver => {
        console.log("Inicio de funcion ");
        setTimeout(() => resolver('Promesa con await y Timeout'), 3000)
    });

    console.log(await miPromesa);
    //debe de eseprar que termine el fin de la promesa para que despligue
    console.log("Fin de la funcion ");

}

functionConPromesaAwaitTimeout();

//Se tiene que esperar 3 seg hasta que imprima 

//no podemos usar un await si no se tiene un ASYNC

/**II */
async function fnPrm2() {
    let promise = new Promise((resolve, reject) => {
        console.log('inicio de la funcion ');
        let evalua = true;
        if (evalua) {
            console.log('ok');
            resolve('Resolvio correcto');
        } else {
            console.log('no');
            reject('no resol');
        }
        console.log('end de la funcion ');
    })
}

fnPrm2();
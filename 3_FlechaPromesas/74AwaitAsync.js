//118

//Cuando trabajamos con async -> indicamos que una funcion debe de regresar una promesa
let promesa = new Promise((resolver) => {
    setTimeout(() => resolver('saludo con promesa y TOut'), 3000);
});

async function miFuncionConPromesa() {
    return 'saludo con promesa y async';
}

miFuncionConPromesa().then(valor => console.log(valor)).catch(eerror => console.log(eerror));

/*
*119
*Await y ASYNC(Debe regresar una promesa ), facilitan el uso de las promesas
*con lo cual se deja de utilizar .then(valor => console.log(valor));
* y se podra trabjar con ese resultado 

*AWAIT (es pera que se mande una promesa)
*/

//ASYNC/AWAIT

async function funcionConPromesaYAwait() {
    //procesaremos el valor de llamar a ellamisma 

    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });

    console.log(await miPromesa);
}



funcionConPromesaYAwait()

//! Await sólo se puede usar dentro de una funcion decalarada con async 
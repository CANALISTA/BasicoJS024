//117

let mipromesa = new Promise((resolve, reject) => {
    let expre = true; //
    if (expre) {
        console.log("6 Promresa");
        resolve('Resolvio correcto');
    } else {
        reject('Se produjo un error');

    }
});

//podemos solo recibir un parmetro del


let promesa = new Promise((resolve) => {
    console.log("18 Inicia la proemesa");
    setTimeout(() => {
        console.log("20");
        resolve('ok 200 le promesa y timeOUt');
    }, 2000);
    console.log("Fin de la promesa");
});

//si no estamos utilizando catch no es necesario declarlo
//luego recibiremos el valor que se reciba despues de que se ejecuta la promesa de
//Se pueda añadir cualquier valor que se desee enviar
//promesa.then();

promesa.then(valor => {
    console.log(valor);
})

//codigo asincrono, o tambien podemos trabjar que una promesa
//el resultado manda a llamar a otra promesa en
//pomdemos realziar los procesos encadenados


//118 PALABRA RESRVADA ASYNC CON PROMESA EN JS

//FACILITA EL USO DE LAS PROMEESAS

let promesa3 = new Promise((resolve, reject) => {
    console.log('Promesa 3 inicio de promesa');
    setTimeout(() => resolve('Saludo'), 1000)
    console.log('Promesa 3 end promesa');

});

//ejecutar 
//promesa3.then(valor=>console.log(valor));
//async indica que una funcion regra una promesa 


async function miFuncionConPromesa() {
    return '57 saludos con promesa y async';
    console.log('Paso por async...');
}

miFuncionConPromesa().then(
    valor => console.log(valor)
    );
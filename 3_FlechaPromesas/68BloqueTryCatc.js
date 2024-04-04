//Manejos de errores 
//O recuperacion de errores en el

'use strict';//iniciamos en modo estrictro


try {
    x=10;
    miFuncion(); 
    throw 'Error ejecutado'
} catch (error) {
    console.log(error);
}

//esto siempre se va ejecutar despues de realizar el codigo
finally {
    console.log("termina la revison de errores ");
}


//Clausula Throws -> para arrojar nuestras execpion 

let resultado= 43; //

try {
if(isNaN(resultado)) throw 'No es un numero'; 
else if(resultado==='') throw 'es una cadena vacia '   
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}

finally{
console.log("Termina reviison de erorres");
}
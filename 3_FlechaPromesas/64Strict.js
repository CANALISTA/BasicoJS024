/*
104
*concpeto de Strict, nos restringimos a no poder utilizar una variables
o funcion que no han sido declarados,
lo podemos utilizar al inicio de nustro propyecto o dentro de una funcion 
*/
"use strict"


function miFun(){
    "use strict"
    console.log('MC '); 
}

miFun();


/**Sobreescritura
 * tendremos una clase padre, y una clase hijo 
 * heredara las caracterisitcas, pero tambien la clase hijo tendra 
 * caracteristicas especicas o difernetes o tendra su propio comportamiento
*/
//105 POO

class Empleado{

    constructor(nombre, sueldo){
        this._nombre=nombre;
        this._sueldo=sueldo
    }

    get nombre(){return this._nombre;}

    get sueldo(){return this._sueldo;}

    set nombre(nm){this._nombre=nm};

    set sueldo(sue){this._sueldo=sue;}

    obtenerDetalles(){
        return `Empleado: nombre:${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

let Em1 = new Empleado('ll',12313); 
console.log(Em1.obtenerDetalles());

class Gerente extends Empleado{

    constructor(nombre, sueldo, depto){
        super(nombre, sueldo);
        this._depto=depto;
    }
//sobreEscritura para que tenga otro comportameiento 
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, departamento: ${this._depto}`;
 
    }
}

let g1= new Gerente('lls',123,'Sistemas');
console.log(g1);
console.log(g1.obtenerDetalles());

let em1= new Empleado('Pillao',1231); 
console.log(em1);



//Polimorfismo
//107

/**
 * Ya tenemos los objetos cleados de em1 y gerernete 1
 * creamos una funcion que recibira un parametro nombrado como Tipo
 * Pasaremos diferentes tipos de objetos  de la clase padre y de la clase hija
 * se ejecutra el metodo de la clase padre o de la clase hija, 
 * polimorfismo -|multiples formas| de la clase padre o de la clase hijo
 * Cremos un método generico al cual le podemos pasar varios tipos 
 */

imprimir(em1); //imprime la informacion de la clase hijo
imprimir(g1); //imprime la informacion de la clase padre 

//imprime los detalles de cada tipo
function imprimir(tipo){

    console.log(tipo.obtenerDetalles());
}


///108
/*InstanceOf
 * Lo utilizamos para concer si la variable que estamos utilziando perenece a cierta clase
* la instanceOf solo respoden a clases padre y no a clases hijas
*si queremos preguntar si es una instancia de mejor jerarquia deberemos de utilziar 
* instance of
* siempre sera una instancia de su clase padre 

*/

function imprim(){

    console.log(tipo.obtenerDetalles());

if(tipo instanceof Gerente){
    console.log('Es objeto de tipo tipo Gerente');}

    if(tipo instanceof Empleado){
console.log('Es objeto de tipo tipo empleado');
    }


    if(tipo instanceof Objetct){
        console.log('Es objeto de Object');
            }
}
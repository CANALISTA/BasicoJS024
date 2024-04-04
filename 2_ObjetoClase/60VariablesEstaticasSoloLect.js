///Creacion de constantes estaticas, para solo lectura 
//87
/**Si queremos añadir una variable de tipo estatico 
 * y que el valor no pude ser modificable 
*/

class Personz{

    //Crearemos un método estatico de lectura, esta variable sera una llamada a un metodo pero desde afuera se
    //va a definir que es una variable estatica, definira el max de elementos que pueden ser creados  
    //mediante la utilizacion del GET y SET que funcionan como una constante
    
    static get MAX_OBJ(){

        return 5;
    }

static contadorPersona=0;
estado='A';
constructor(nombre, apellido,edad){
    this._nombre=nombre;
    this._apellido=apellido;
    this._edad=edad;
 
    console.log("Se ha creado una nueva persona "+ Personz.contadorPersona);

    if(Personz.contadorPersona <Personz.MAX_OBJ){
    //puede seguir creando personas 
    this.idPersona= ++Personz.contadorPersona;
    }
    else{
      console.log('Se han supeado el maximo de objetos permitidos ')  
    }
}

toString(){
    return  this.idPersona+ ' '+this._nombre + ' '+ this._apellido + ' ' + this._edad + ' '+ this.estado;
}

}

class Estudiante extends Personz{

    constructor(nombre,apellido,edad,correo){
        super(nombre,apellido,edad);
        this._correo=correo;
    }
}


let ns= new Estudiante('Arriola','Arriola',12,'asas');
console.log(ns);
console.log(ns.toString());


console.log(Personz.MAX_OBJ);
Personz.MAX_OBJ=10;

console.log(Personz.MAX_OBJ);

let ns2= new Estudiante('Arriola2','Ba',12,'a');
console.log(ns2);
console.log(ns2.toString());


let ns3= new Estudiante('Arriola3','Ba',12,'a');
console.log(ns3);
console.log(ns3.toString());

let ns4= new Estudiante('Arriola3','Ba',12,'a');
console.log(ns4);
console.log(ns4.toString());

let ns5= new Estudiante('Arriola3','Ba',12,'a');
console.log(ns5);
console.log(ns5.toString());

let ns6= new Estudiante('Arriola3','Ba',12,'a');
console.log(ns6);
console.log(ns6.toString());


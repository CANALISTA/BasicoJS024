//Atribubos no estaticos y estaticos
//85
class Persona{

    //Atributo de la clase 
    ///Se asocia directamente con la clase sin necesidad de
    static contadorObjetosPersona=0;

   
    //Atributo de los objetos plantilla
     //es un atributo que se asocia con lo objetos y no con la clase
     //Podemos acceder a ellos 
    email='Valor por default email';

    constructor(nombre,apellido,telefono){

        this._nombre=nombre;
        this._apellido=apellido;
        this._telefono=telefono

        Persona.contadorObjetosPersona++;
        
        console.log('Se incrementa el contador de persona en '+  Persona.contadorObjetosPersona); 
    }

}

class Empleado extends Persona{
    constructor(nombre,apellido,telefono,depto){
        super(nombre,apellido,telefono)
        this._depto = depto; 
    }
}

let p1 = new Empleado('Juan','YYY',1234,'abc');
console.log(p1); 
console.log(p1.email); 
console.log(Empleado.email); //Undefined establece que se esta creando la variable y no la reconoce de la plantilla
console.log(Persona.email);//Undefined es el valor inicial de la variable, no es un 
//Undefined -> Variable nueva


///Ejemplo de uso de la palabra Stataic
//86
//Se creada un Id para Persona, por objeto que se cree de tipo persona entonces estamos asignando un nuevo 
//identificador ya que se incrementa el contadr estatico por cada persona que se cree; 
class Persn{

    static contadorPersn=0;

    constructor(nombre,apellido){
        

        this._nombre=nombre;
        this._apellido=apellido;
        this._idPersona=++Persn.contadorPersn;

        console.log("Se ha creado un nuevo contador de pers "+Persn.contadorPersn); 
    }

    get nombre(){return this._nombre; }
    
    
    get apellido(){return this._apellido; }

    toString(){

     return this._idPersona +' ' + this._nombre +' ' + this._apellido;

    }

}

let perns1= new Persn('AB','CD'); 
console.log(perns1.toString()); 


let pern2= new  Persn('ED','ff');
console.log(pern2.toString());


console.log(Persn.contadorPersn);

let persn3= new Persn('DE','eaaa'); 
console.log(persn3.toString());

console.log(persn3); 

/**
 * Declaramos nuestra clase persona y este tiene un atributo estatico que es el contador
 * Y cada vez que creamos un nuevo objetos ya sea de la clase padre o de la clase hija
 * por cada objeto se esta incrementantado la variable contadorPersona y por 
 * medio de esa variable se le asigna un valor unico de cada id a cada objeto
 * Funciona siempre igual sin importar el objeto, solo si los objetos tienen relacion 
 * en la jerarquia de clases de una clase padre o una clase hija
 */
 


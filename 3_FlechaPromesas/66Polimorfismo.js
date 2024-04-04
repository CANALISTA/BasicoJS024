//Clase padre
class Empleado{
    constructor(nombre, apell, sueldo){
        this._nombre=nombre;
        this._apell=apell;
        this._sueldo=sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre ${this._nombre} sueldo: ${this._sueldo}`
    }
}


//Clase hijo
class Gerente extends Empleado{
    constructor(nombre,apellido, sueldo, depto){
        super(nombre,apellido,sueldo); 
        this._depto=depto;
        
    }
    obtenerDetalles(){
    //    return `Gerente: nombre ${this._nombre}, departamento: ${this._depto} ` + super.obtenerDetalles()
    return `Gerente: departamento: ${this._depto} ` + super.obtenerDetalles()
  
    }
    retornarTipo(){
        return typeof this._nombre;
    }
}   

//Metodo indepenedinet
//Polimosfirmo puede ejecutar el codigo de clase (funcion) padre o de la clase hijo para
//ejecutar las multiples formas
function imprimir(tipo){
    //accede a la clase hija
    console.log(tipo.obtenerDetalles());
}

function retornaTipo(tipo){
    console.log(tipo.retornarTipo()); 
}

p1 = new Gerente('Luis', 'Allan', 123,'dfgh');
console.log(p1.obtenerDetalles()); //

e1= new Empleado('ll', 'asd',321); 
console.log(e1.obtenerDetalles());

imprimir(p1); 
imprimir(e1);

retornaTipo(p1); 
retornaTipo(p1);



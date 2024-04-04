class Persona{
 
    constructor(nombre, ape, edd){
        this._nombre=nombre; 
        this._ape=ape; 
        this._edd=edd; 
    }
    
    retornarNombreComp(){
        this._nombre + ', ' + this._ape + ', ' + this._edd;
    }
} 
 
//Sobreescritura
/**
  Se sobre escribiran atributos de la clase hija y que estos sean tomados por la clase padre
 La clase hija sobre escribira el comportamiendo de la clase padre, 
 */
 
  class Empleado extends Persona{
 
    constructor(nombre, ape, edd, depto){
        super(nombre, ape,edd, depto); 
        this._depto= depto; 
      
    }
 
    get depto(){
        return this._depto;
    }
 
    set depto(entrada){
        this._depto=entrada;
    }
 
    //SobreEscritura, podemos modificar el nombre de la funcion de la clase padre,
    // Pero se debe de tomar el mismo nombre que se refleja en la class Padre
    retornarNombreComp(){
   //   return 'From Depto: '+ this._depto + ', ' + this._nombre;
   this._nombre + ', ' + this._ape + ', ' + this._edd;
 }
 
  }
 

  let emp2 = new Empleado('pedro','roca',12,'ssa'); 
 console.log(emp2);
 
 
 class Persona1{
constructor(nombre, apellido, telefono){
 
    this._nombre=nombre; 
    this._apellido=apellido; 
    this._tele=telefono; 
}
 get nombre(){
return this._nombre; 
 
 }
 
 nombreCompletos(){
     return 'nbre -> '+this._nombre + ' <> '+ this._apellido + ' '+ this._tele; 
 }
 
 
 
 }
 
 class Empleado2 extends Persona1{
     constructor(nombre, apellido,tel,departmento){
         super(nombre,apellido,tel, departmento);
         this._depto=departmento;
     }
 
     get departmento(){
         return this._depto;
     }
 
     set departmento(entra){
this._depto=entra;
     }
 
     //sobreescritura
     nombreCompleto(){
         return this._depto + ' ' + this._nombre; 
     }
 
       //sobreescritura
       nombreCompleto(){
        return super.nombreCompletos() +' Departamento '+this._depto;
    }
 }



 let pp2= new Empleado2('Jesus','Marcos',234,2342)
 console.log(pp2);
 console.log(pp2.nombreCompleto());
 
 

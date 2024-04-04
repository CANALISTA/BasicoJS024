//81


class Personz{
    constructor(nombre, edda, tel){
        this._nombre=nombre;
        this._edad=edda;
        this._tel = tel;
    }

    get nombreCompleto(){

        return this._nombre + ' ' + this._edad + ' ' + this._tel; 
    }
}

let p1= new Personz('AAA',123,432343)
console.log(p1.nombreCompleto); 

class Empleado extends Personz{


    constructor(nombre, edda, tel, depto){
  
        super(nombre, edda, tel);
        this._depto=depto;
    }
  
}

let p2= new Empleado('juan', 123, 12333,'dept'); 
console.log(p2);


for (elemento in p2){
    console.log(p2[elemento]);
}

let jstring= JSON.stringify(p2);
console.log(jstring); 


p2['nombre']='alemes';

p2.nombre='alemes';
console.log(p2.nombre); 


console.log(p2);


console.log((2>1)?  true: false); 

//MEtodos Estaticos
//83
 
class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }
 
  get nombre() {
    return this._nombre;
  }
  get apellido() {
    return this._apellido;
  }
  get nombreCompleto() {
    return this._nombre + " " + this._apellido;
  }
 
  static saludar() {
    console.log("Saludos desde el metodo estatico");
  }
 
  static saludar2(varl1, varl2){
      let s = '${varl1} se dice que _${varl2}';
return s;
// this.saludar2()+''+varl1 + ' '+ varl2;
 
  }
 
  static saludar2(p1){
      console.log("--- >"+ p1.nombre);
   return "--- >"+ p1.nombre;
 
  }
 
  static saludar3(varl1, varl2){
    let s = '${varl1} se dice que _${varl2}';
return s;
///revisar por uso de $
// this.saludar2()+''+varl1 + ' '+ varl2;
 
 
}
 
  toString() {
    {
      return this._nombre + " " + this._apellido;
    }
 
 
  }
}
 
//vamoa a añadir un metodo estatico para comprender como funcionn los métodos
let p1 = new Persona("ABC", "DEG");
console.log(p1);
 
// no es posible mandarlo a llmar console.log(p1.saludar()); //p1.saludaar is not a function
//Un metodo estático no puede ejecutar los meotodos estaticos, unque  si este defindo no se puede invocar
//Un metodo estáico se asocia con una clase y solo lo podemos utilizar desde la clase misma
 
 
let s= Persona.saludar();
//console.log(Persona.saludar2('hola','mundo'));
console.log('     ');
 
Persona.saludar2(p1);
 
 
class Empleado extends Persona{
    constructor(nombre, apellido, grado){
        super(nombre,apellido,grado);
        this._grado=grado;
    }
 
}
 
let emp1 = new Empleado('Angel', 'ls', 1234,'hom3');
console.log(emp1);
 
Empleado.saludar();
Empleado.saludar2(emp1);

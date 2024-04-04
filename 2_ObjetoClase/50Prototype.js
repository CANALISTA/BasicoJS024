//---------50-----------------
///50 FunctionPrototype
function Persona(nombre, appellid, telefono) {
  this.nombre = nombre;
  this.appellid = appellid;
  this.telefono = telefono;
  this.imprimirDatos = function () {
    return this.nombre + " " + this.appellid + " " + this.telefono;
  };
}

let pp = new Persona("abv", "ccc", 1234);

console.log(pp.appellid);
console.log(pp.imprimirDatos());

//Se le agrega este valor al objeto creado y a todos
//los objetos que se instancien apartir del objeto Persona
Persona.prototype.email = "jajas@gmail.com";

console.log(pp.imprimirDatos());
pp.email = "crodriguez@g";
console.log(pp.email);

console.log(pp);

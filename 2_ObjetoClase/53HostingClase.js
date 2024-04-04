//----53
//Una clase es una plantilla,
//Un objeto es una instanacia de una clase,
//Se recomiendan que comiencnn en mayusculas

class Person {
  //creamos el constructor

  constructor() {
    //inicializamos los atributos o metodos
  }
}

class Persona {
  constructor(nombre, apellido, telefono) {
    //Parametro = argumento
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
  }
}

//Crear el un primer objeto
//Instancia de clase u instancia de objeto

let persona1 = new Persona("am", "pm", 123456);

console.log(persona1);

let persona2 = new Persona("ansns", "peedam", 654123456);

console.log(persona2);

///Metodo get y Metodo Set
//Para Clases

class Persona1 {
  constructor(nombre, apellido, telefono, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.edad = edad;
  }
  get obtenerNombreCompleto() {
    return this.nombre + " " + this.apellido;
  }

  set modNombre(entada) {
    this.nombre = entada;
  }
}

let perss = new Persona1("aoooo", "bcsde", 12345, 11);
console.log(perss);

Persona1.modNombre = "asas";
console.log(perss);
console.log(perss.obtenerNombreCompleto);

perss.modNombre = "cambia bami";
console.log(perss.obtenerNombreCompleto);

/* Para hacer el GET y el SET no se puede utilizar el mismo nombre que las atributos
Por eso se recomienda utilziar un _ antes de las propiedades  */

class Persona2 {
  constructor(nombre, apellido, telefono) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._telefono = telefono;
  }
  get nombre() {
    return this._nombre;
  }

  set nombre(entrada) {
    this._nombre = entrada;
  }

  get nombreCompleto() {
    this._nombre + " " + this.apellido;
  }
}

let pp3 = new Persona2("Abc", "eefg", 12344);
console.log(pp3);
console.log(pp3.nombre);
pp3.nombre = "aosls";
console.log(pp3);
//los metodos GET y SET no llevan ();
console.log(pp3.nombreCompleto);

Persona2.prototype.email = "lele@g.com";

/**HOISTING Y CLASES-<>  */
/* Cuando utilizamos el tema de las clases primero debemos de crear la clase para
luego poderla utilizar, esto solo aplica con las funciones y variables(VAR),
cuando queremos utilizar esto es necesario primero declarar la clase
let person3 = new Persona4('av','bbc',123)
*/

/*HERENCIA -<> Podemos herder una clase padre a una clase de hijo
Persona <------ Empleado
Empleado heredara las caracteristicas de la clase Persona al agregar Exnteds dentto de su clase
UML ->> umletino.com
*/

class Persona4 {
  constructor(nombre, appe, edad) {
    this._nombre = nombre;
    this._apellido = appe;
    this._edad = edad;
  }

  get obtenerNombre() {
    return this._nombre + " " + this._appe;
  }

  set cambiaN(parm1) {
    this._nombre = parm1;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(parm) {
    this._apellido = parm;
  }

  get edad() {
    return this._edad;
  }

  set edad(pem) {
    this._edad = pem;
  }
}

class Empleado extends Persona4 {
  //solo se inicia el parmetro de la clase hija
  //SE DEBE DE INICIAR EL CONSTRUCTTOR CON LA FUNCION SUPER PARA HACERE REFERENCIA
  //AL CONSTRUCTOR DE LA CLASE HIJA( SUPER-> CONSTRUCTOR DE LA CLASE PADRE)
  constructor(nombre, appe, edad, departamento) {
    super(nombre, appe, edad, departamento);
    this._departamento = departamento;
  }
  get departamento() {
    return (this._departamento = this.departamento);
  }

  set departamento(ls) {
    this._departamento = ls;
  }
}

let emplead1 = new Empleado("123", "ieie", 123);
console.log(emplead1);
console.log(emplead1._apellido);

class Empleado2 extends Persona4 {
  constructor(nombre, ape, edd, depto) {
    super(nombre, ape, edd, depto);
    this._deptp = depto;
  }
  get depto() {
    return this._deptp;
  }

  set depto(dp) {
    this._deptp = dp;
  }
}

let dConta = new Empleado2("nombre", "ape", 123, "dep");
console.log(dConta);

///Herencia de Metodos
//Imprimir el nombre completo

class Empleado3 extends Persona4 {
  constructor(nobre, ape, edd, depto) {
    super(nobre, ape, edd, depto);
    this._depto = depto;
  }
  get depto() {
    return this._depto;
  }

  nombreCompleto() {
    return this._nombre + " " + this._apellido;
  }
}

let ls3 = new Empleado3("maria ", "apllido", 1234, "sold");
console.log(ls3);
//podemos crear funcinoes sin la necesidad de utilizar la palabra function
//Usamos el nombre de una variable que apunta a un metodo de una clase hija,
//podemos acceder sin problema a la calse padre
console.log(ls3.nombreCompleto());

//Todos los metodos que se declaran dentro de la clase padre, pueden ser utilizadas
//dentro de las clases hijas y ellas se utilizan dentro de estas clases
//como que fueran metodos prpopios de las clases hijas.

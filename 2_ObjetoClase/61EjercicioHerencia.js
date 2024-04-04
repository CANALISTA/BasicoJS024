//Ejercicio de Herencia
/*Se debe de crear un contador  */

class Persona {
  static idPersona = 0;

  //Propiedades de instancia
  constructor(nombre, apellido, edad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this.edad = edad;

    ++Persona.idPersona;
    console.log("<> Se ha creado un nuevo objeto: " + Persona.idPersona);
  }

  get idPersona() {
    return this._idPersona;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nams) {
    this._nombre = nams;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(ape) {
    this._apellido = ape;
  }

  get edad() {
    return this._edad;
  }

  set edad(ed) {
    this._edad = ed;
  }

  //https://stackoverflow.com/questions/29771597/how-can-i-construct-a-template-string-from-a-regular-string
////https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals?retiredLocale=vi
  get toSS() {
    return `${this._nombre} ${this._nombre}`;

    }

  toString() {
    return (
      "id <PER>: ," +
      Persona.idPersona +
      " ," +
      this._nombre +
      ", " +
      this._apellido +
      " " +
      this._edad
    );

    //templateString, comilla o tilde de frances 

  }

 
}

let per = new Persona("Awa", "Wea", 12);
console.log(per.toString());

class Empleado extends Persona {
  static idEmpleado = 0;

  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);

    this._sueldo = sueldo;
    ++Empleado.idEmpleado;
    console.log("Se ha creado un empleado: " + Empleado.idEmpleado);
  }

  get idEmpleado() {
    return Empleado.idEmpleado;
  }

  get sueldo() {
    return this._sueldo;
  }

  set sueldo(sld) {
    this._sueldo = sld;
  }

  toString() {
    return (
      "ID <EMP>:" +
      Empleado.idEmpleado +
      ", <PER>:" +
      Persona.idPersona +
      " ," +
      this._nombre +
      ", " +
      this._apellido +
      ", " +
      this._edad +
      ", SUELDO: " +
      this._sueldo
    );
  }
}

let emp = new Empleado("Jhnos", "Good", 12, 11);
console.log(emp.toString());

class Cliente extends Persona {
  static idCliente = 0;
  constructor(nombre, apellido, edad) {
    super(nombre, apellido, edad);
    this._fechaRegistro = new Date();

    ++Cliente.idCliente;
    console.log("Se ha creado un cliente: " + Cliente.idCliente);
  }

  get idCliente() {
    return Cliente.idCliente;
  }

  get fechaRegistro() {
    return this._fechaRegistro;
  }

  set fechaRegistro(Date) {
    this._fechaRegistro = Date;
  }

  toString() {
    return (
      "ID :<CLINT>" +
      " , " +
      this._nombre +
      " " +
      this._apellido +
      " ," +
      this._edad +
      " ," +
      this._fechaRegistro
    );
  }

  toString(){

    return super.toString();
  }

}

let per1 = new Persona("Awa", "Wea", 12);
console.log(per1.toString());
console.log(per1.toSS);
let emp1 = new Empleado("Jhn", "Good", 555, "Gibson");
console.log(emp1.toString());

let clint = new Cliente("Gibson", "Pres", 39111);
console.log(clint.toString());



/*
104
*concpeto de Strict, nos restringimos a no poder utilizar una variables
o funcion que no han sido declarados,
lo podemos utilizar al inicio de nustro propyecto o dentro de una funcion 
*/
"use strict";

function miFun() {
  "use strict";
  console.log("MC ");
}

miFun();

/**Sobreescritura
 * tendremos una clase padre, y una clase hijo
 * heredara las caracterisitcas, pero tambien la clase hijo tendra
 * caracteristicas especicas o difernetes o tendra su propio comportamiento
 */
//105 POO

class Empleado {
  constructor(nombre, sueldo) {
    this._nombre = nombre;
    this._sueldo = sueldo;
  }

  get nombre() {
    return this._nombre;
  }

  get sueldo() {
    return this._sueldo;
  }

  set nombre(nm) {
    this._nombre = nm;
  }

  set sueldo(sue) {
    this._sueldo = sue;
  }

  obtenerDetalles() {
    return `Empleado: nombre:${this._nombre}, sueldo: ${this._sueldo}`;
  }
}

class Gerente extends Empleado {
  constructor(nombre, sueldo, depto) {
    super(nombre, sueldo);
    this._depto = depto;
  }
  //sobreEscritura para que tenga otro comportameiento
  obtenerDetalles() {
    return `${super.obtenerDetalles()}, departamento: ${this._depto}`;
  }
}

let g1 = new Gerente("lls", 123, "Sistemas");
console.log(g1);
console.log(g1.obtenerDetalles());

let em1 = new Empleado("Pillao", 1231);
console.log(em1);

//Polimorfismo
//107

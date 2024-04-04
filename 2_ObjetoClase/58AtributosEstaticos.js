//Atribubos estaticos
/**Crearemos una variable estatica dentro de la clase con un valor
 * palabra reserva de static variable = valor {Define un atributo que pertenece a la clase y no pertenece a ninugun obetjo}
 * Esto se asocia a la clase misma y no a ningun otro obetjo
 */
class Persona {
  static contadorDeObjetosPersona = 0;

  constructor(nombre, apellido, tel) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._tel = tel;

    /**Las clases hijas tambien heredan los métodos estatícps y podemos acceder a ella sin problema,
     * +este valor se asocia directamente con la clase en si misma no con los objetos
     * Dentro del constructor podemos cambiar su variable de ++
     * Dentro del constructor no podemo usar this permite acceder a la variable que ese esta ejecuanto en ese momento
     * asi que por lo tanto que this apunta al objeto, no debemos usarlo de esta forma por que esta variable
     * se asocia a la clase esa variable, nos refiromos a el como Persona.contadorDeObjetosPersona++;
     */
    console.log('Se incrementa el valor de contadorPer '+Persona.contadorDeObjetosPersona); 
    Persona.contadorDeObjetosPersona++;
  }

  get nombre() {
    return this._nombre;
  }

  get apellido() {
    return this._apellido;
  }

  get tel() {
    return this._tel;
  }

  ToString() {
    return this._nombre + " " + this._apellido;
  }

  saludo() {
    return "Saludo generico " + this._nombre + " " + this._apellido;
  }

  static saludo1() {
    return "Saludo generico " + this._nombre + " " + this._apellido;
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, wea) {
    super(nombre, apellido, wea);
    this._wea = wea;
  }

  //
  saludo3() {
    console.log(
      "Saludo generico " +
        this._nombre +
        " " +
        this._apellido +
        this._wea +
        this._tel
    );
    return (
      "Saludo generico " +
      this._nombre +
      " " +
      this._apellido +
      this._wea +
      this._tel
    );
  }
}

let em1 = new Empleado("DX7", "XP60", 123, "GG");
console.log(em1);

em1.saludo3();

console.log(em1.contadorDeObjetosPersona);
//como el valor de esta varible no se encuentra dentro del objeto nos indica que no esta definido
//Demos de acceder por medio de ella por medio de la clase y no por medio del objeto
console.log(Persona.contadorDeObjetosPersona);

let em2 = new Empleado("M1", "X3", 92923, "ms");
console.log(em2);
console.log(em2.contadorDeObjetosPersona); // es undefindied por que es una variable nueva
let em3 = new Empleado();

//Para poder utilizar esta variable estatica es necesario que utilicemos la clase principal
//y posteriormente al valor de la persona;
console.log(Persona.contadorDeObjetosPersona);
console.log(Empleado.contadorDeObjetosPersona);

/**Las clases hijas tambien heredan los métodos estatícps y podemos acceder a ella sin problema,
 * +este valor se asocia directamente con la clase en si misma no con los objetos
 * Dentro del constructor podemos cambiar su variable de ++
 * Dentro del constructor no podemo usar this permite acceder a la variable que ese esta ejecuanto en ese momento
 * asi que por lo tanto que this apunta al objeto, no debemos usarlo de esta forma por que esta variable
 * se asocia a la clase esa variable
 */

/*JS por defecto cuando creamos una clase le añade un extends a la clase Padre Object
*La clase Object contiene varios metodos, 
*Metodo toString-> Permite mandar a imprimir el estado actual del objeto,los valores actuales
                    de cada uno de los atribuos del metodo, este metodo es importante 
                    para la declaración de las clases

*/

/**La clase Object tienen metodos directos que estan defindos 
 * dentro de la funcion de prototype
 * Object.prototype.toString
 * Ademas prototype-> nos permite añadir metodos y atributos de forma dinamica a nuestra clase
 */
class Persona  {
    constructor(nombre, apellido){
        this._nombre=nombre;
        this._apellido=apellido;
    }

    get nombre(){return this._nombre;}

    set nombre(nombre){this._nombre=nombre;}

    get apellido(){return this._apellido;}

    set apellido(ape){this._apellido=ape;}
 
    nombreCompleto(){return this._nombre + ' ' + this._apellido;}

    //Sobre escribimos el metodo de la clase padre
    toString(){
        //agregamos polimorfismo (multiples formas en tiempo de ejecucion)
        /**el emetodo que se ejecuta depende si es una referencia de tipo padre
         * o si es de tipo hijo
         * es imporante para reutilizar el codigo de las clases
         */
        return this.nombreCompleto();
    }

}

class Empleado extends Persona{
constructor(nombre,apellido,tel,depto){
    super(nombre,apellido,tel,depto);
    this._tel=tel;
    this._depto=depto;
}
//sobreEscritura
nombreCompleto(){return this._nombre + ' <> ' + this._apellido + 'depto '+ this._depto; }
//SobreEscritura
nombreCompleto(){ return super.nombreCompleto()+ ' '+ super.telefono+' '+this._depto; }

}

let p1= new Empleado('Dm','F#',1234,'C#')
console.log(p1);

console.log(p1.toString()); //[object Object] es lo que imprime dentro de un navegador web
//Podemos sobreescribir el meotod 

//Se manda a llamar al metodo de la clase hija, esto se le conoce tambien como polimorfismo
//desde un objeto vamos a poder mandar a llamar a un metodo definido en clase padre o en la 
//Clase hija, pero esto va a depender con el tipo de referencia (padre, hijo)
//Esto depende con la referencia que estamos trabajando, cuando estamos trabajando 
//con un metodo de la clase padre se ve afecto este, 
//Es una sobre escritura y polimorfismo, 
console.log(p1.toString()); 

/* Todo depende del metodo donde lo estmos utilizando, si es en la clase padre
o en la clase hija */
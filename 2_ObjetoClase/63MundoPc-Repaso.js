//98
class DispositivoEntrada {
  /*Clase Padre 1, 
Clase responsable de crear objetos del TipoDispositivo de entrada */
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }

  set tipoEntrada(en) {
    this._tipoEntrada = en;
  }

  get marca() {
    return this._marca;
  }

  set marca(mar) {
    this._marca = mar;
  }

  toString() {
    return `Tipo: ${this._tipoEntrad}, Marca: ${this._marca}`;
  }
}

class Raton extends DispositivoEntrada {
  /**CLASS 2
   * Crear objetos de tipo Raton */
  static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    ++Raton.contadorRatones;
    console.log("Se ha creado un rato");
  }

  get idRaton() {
    return this._idRaton;
  }

  set marca(mrc){this._marca=mrc;}

  toString() {
    return `Raton: [${this._idRaton}, contador de raton es: ${Raton.contadorRatones}]`;
  }
}


let rat1 = new Raton('USB','HP'); 
console.log(rat1);

let rat2 =new Raton('PS2','WW')
console.log(rat2);

//carmbiar la marca
rat2.marca='LS';
console.log(rat2);


class Teclado extends DispositivoEntrada {
  //100
  /*CLASS 3
    Crear objetos de tipo Teclado */
  static contadorTeclado = 0;
  constructor(tipoEntrada,marca) {
      super(tipoEntrada,marca);
      this._idTeclado=++Teclado.contadorTeclado;
 
    console.log('Se ha creado un teclado ')
  }


  get idTeclado(){return this._idTeclado;}
  toString() {
    return `Teclado: ${this._idRaton}, contador de raton es: ${Raton.contadorRatones} marca: ${this._marca}`;
  }
}



let te1 = new Teclado('PS2','LA');
let te2= new Teclado('PW', 'AS');

console.log(te1);
console.log(te1.toString());

class Monitor {
  //101
  //clase4
  static contadorMonitor=0;
  constructor(marca, tamanio) {
    this._marca = marca;
    this._tamanio = tamanio;
    this.id_monitor=++Monitor.contadorMonitor;
  }

  get idMonitor(){return this._idMonitor;}

  toString(){
    return `Monitor: ${this._idMonitor}, contador de raton es: ${Monitor.contadorMonitor} marca: ${this._marca}`;
  }
}


let mon1 = new Monitor('LG','15'); 
console.log(mon1);
console.log(mon1.toString());

let mon2= new Monitor('HLG','31'); 
console.log(mon2);
console.log(mon2.toString());

class Computadora {
  //102
  //Clase5
  static idComputadora = 0;

  constructor(nombre, monitor, teclado, raton) {
    this._idComputadora=++Computadora.idComputadora;
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
 
  }

  toString(){
    return `Computadora ${this._idCOmputadora}, ${this._nombre} \n ${this._raton},\n ${this._teclado}, \n${this._monitor}`;
  }
}


let c1= new Computadora('CLON!',mon1,te1,rat1);

console.log(c1);
console.log(`COMS1 ${c1}`)

let c2= new Computadora('HP',mon2,te2,rat2);
console.log(`COMS2 ${c2}`)

class Orden {
  //103
  //no tienen una relacion solo una relacion de agregacion
  static idOrden = 0;

  //no recibe ningun parmaetro solo se inicializa de forma interna 
  constructor() {
    this._idOrden = ++Orden.idOrden;
    this._computadora = []; //arreglo de computadoras
 
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarComputadora(comp) {
    this._computadora.push(comp);
  }


  mostrarOrden(){
    let computadorasOrden='';

    for(let cmp in this._computadora){
      computadorasOrden +=cmp;
    }
   // return computadorasOrden;
   console.log(` Orden: \n ${this._idOrden}, \n computardoras ${computadorasOrden}`);
  }


}


let or1 = new Orden();
or1.agregarComputadora(c1);
or1.mostrarOrden();

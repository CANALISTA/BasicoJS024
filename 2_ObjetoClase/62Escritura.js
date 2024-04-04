//------------62

//93

class Producto {
  static contadorProducto = 0;

  constructor(nombre, precio) {
    this._idProducto = ++Producto.contadorProducto;
    this._nombre = nombre;
    this._precio = precio;
  }

  get idProducto() {
    return this._idProducto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nmb) {
    this._nombre = nmb;
  }

  get precio() {
    return this._precio;
  }

  set precio(prc) {
    this._precio = prc;
  }

  //sobre escribimos el metodo de la clase objet
  //template literal
  toString() {
    //return this._nombre+ ' '+this._precio
    return `idProducto: ${this._idProducto} , Nombre: ${this._nombre} , Precio: $${this._precio}\n`;
  }
}

let p1 = new Producto("pantalon", 123);
console.log(p1);

let p2 = new Producto("aa", 312);
console.log(p2);

//orden

class Orden {
  // no tienen una relacion de herencia solo relacion de agregracion
  static constadorOrdeners = 0;

  static get MAX_PRODUCTOS() {
    return 5;
  }
  //No recibe ningun parametro, solo se inicializa
  constructor() {
    this._idOrden = ++Orden.constadorOrdeners;
    //creamos este atributo para que pueda recibir parametors de tipo arreglo
    this._productos = [];
    this._contadorProductosAgregados = 0;
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarProducto(producto) {
    if (this._productos.length < Orden.MAX_PRODUCTOS) {
      this._productos.push(producto);
      //cuandos elementos hemos agregado al arreglo
      // this._productos[this._contadorProductosAgregados++]=producto;
    } else {
      console.log("No se pueden agregar más productos ");
    }
  }
  calcularTotal() {
    let totalVenta = 0;

    //for simplificado
    for (let producto of this._productos) {
      totalVenta += producto.precio; //totalVenta = totalVenta+ producto.precio
    }
    return totalVenta;
  }

  mostarOrden() {
    let productosOrden = "";
    for (let producto in this._productos) {
      productosOrden += producto.toString() + " ";
    }
    console.log(
      `Orden ${
        this._idOrden
      }, Total: ${this.calcularTotal()}, Productos: ${productosOrden} `
    );
  }
}

let p3 = new Producto("pantalon", 123);
console.log(p3);

let p4 = new Producto("aa", 312);
console.log(p4);

//No recibe ningun parametro, solo se inicializa
let orden1 = new Orden();
console.log(orden1);

//un producto se agrega a una orden
//los objetos Producto pueden existir independienmente del objeto Orden
//A esto se le conoce como una relacion de agregacion
orden1.agregarProducto(p3);

orden1.agregarProducto(p4);
console.log(orden1);

orden1.mostarOrden();
console.log(orden1);

let orden2 = new Orden();
console.log(orden2);
orden2.agregarProducto(p1);
orden2.agregarProducto(p2);
orden2.agregarProducto(p3);
orden2.agregarProducto(p4);
orden2.agregarProducto(p1);
orden2.mostarOrden();

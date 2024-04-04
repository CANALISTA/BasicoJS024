//Hoisting-> permite mandar a llamar una funcino
//que no ha sido creada
//111
miFuncion();

//Funcion de forma clasica
//# nombre de la funcion y argumentos
function miFuncion() {
  console.log("mi fn");
}

/*Las funciones flechas son funciones anonimas
asignamos una funcion anonima a una variable
y estas no aplican el uso de Hoisting,
al final de asignamos al objeto una referencia */
let anonimaMiFuncion = () => {
  console.log("mi fn");
};

anonimaMiFuncion();

//indica que inicia el cuerpo de la funcion flecha =>
let miFuncionFleha = () => {
  console.log("Saludos desde mi FuncionFlecha");
  //aun podemos indicarle una nueva referecnia a la variable de la funcion flecha
};

//Hoisting y con las arrowFunction no podemos ponerlo en cuarlquier parte del codigo
miFuncionFleha = () => {
  console.log("Saludos desde la funcion flecha");
};

/**Existen variantes de la funcion flecha y no se aplica hoisting */
//una vez que le asignamos la refencia ya no podremos cambiarlo es mejor utilziar let

const fFlecha = () => {
  console.log("Funcion Flacha");

  //const ya no podemos asignarle una nueva referencia
};

fFlecha();

//Mas de FuncionesFlehcas

let mFuncion = function () {
  console.log("mas de felchas");
};

mFuncion++;

//let podemos modificar la referencia
//const no podemos modificar las referencias nueva

//112
//================================================================================
/**Podemos simplificar las funciones flecha */

const funcion = () => {
  return `Ho`;
};
console.log(funcion());

const miFuncionFlecha = () => {
  console.log("Salud desde la funcion flecha");
};
miFuncionFlecha();

//================================================================================
//funcion flecha que retornen un valor
/**Si queremos colocar un objeto lo podemos establecer dentro de () */

const saludar = () => {
  return "Saludos desde la funcion flecha.";
};
console.log(saludar());

const regresaObjeto = () => ({ nombr: "juan", apellido: "Lazzo" });
console.log(regresaObjeto());

//Formato Clasisco
const funcionConParametrosClasico = (mensaje) => {
  console.log(mensaje);
};
funcionConParametrosClasico("Saludo desde la funcion co param");

//Si es solo un parametro podemos omitir el uso de los ()
// const funcionConParametros = (mensaje)=> console.log( mensaje );
const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros("Saludo desdes con parametros");

//funcion con varios parametros
const funcionConVariasVariables = (op1, op2, op3) => {
  return `${op1}+${op2}+${op3}`;
};

console.log(funcionConVariasVariables(1, 2, 3));

///ex1
let arreglo1 = ["a1", "b1", "c1", "d1", "e1"];
const funcionParam = (arreglo) => {
  for (clave in arreglo) {
    console.log(clave, ": " + arreglo[clave]);
  }
};


//! Template String-> `${}` 
console.log(funcionParam(arreglo1));

console.log(arreglo1);

//Creando objeto2
const saludar2 = () => {
  "salduos desde";
};
console.log(saludar());

//saludandocon Param

const funcionParam3 = (hola) => {
  return "mando a escribir " + hola;
};
console.log(funcionParam3("oosos"));

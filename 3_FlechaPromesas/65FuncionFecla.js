//FuncionFlecha
//Hoisting-> permite mandar a llamar una funcino
//que no ha sido creada
//111
miFuncion();

//Funcion de forma clasica
function miFuncion() {
  console.log("mi fn");
}

/*Las funciones flechas son funciones anonimas */
let anonimaMiFuncion = function () {
  console.log("mi fn");
};

anonimaMiFuncion();

//indica que inicia el cuerpo de la funcion flecha =>
let mFuncionFleha = () => {
  console.log("Saludos desde mi FuncionFlecha");
  //aun podemos indicarle una nueva referecnia a la variable de la funcion flecha
};

mFuncionFleha();

/**Existen variantes de la funcion flecha y no se aplica hoisting */

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

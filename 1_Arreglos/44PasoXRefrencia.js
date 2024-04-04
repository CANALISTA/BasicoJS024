//A un objeto se le pueden asociar propiedades y metodos
//Se sugiere que se cree una variable tipo constante

const Persona = { nombre: "kje", apellido: "Perez" };
//la variable persona almacena una referencia de este objeto

//paso por referencia del objeto en memoria, ambos apuntan al mismo objeto
//Apunta a un objeto en memoria(referencia) que contendra el nombre y el apellido
function cambiarValor(p1) {
  p1.nombre = "carlos";
  p1.apellido = "Lala";
}

//Se le pasa el Objeto persona a la funcion, metodo de cambiarValor
cambiarValor(Persona);
console.log(Persona.nombre + " " + Persona.apellido);

//Una variable existe solo mientras ejecua un método
/**Se le paso la refrencia a un objeto y se modificaron sus propiedads */

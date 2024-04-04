//Podemos utilizar metodos difinidos y podelos utilizar en otro objeto
 
function Persona(p1,p2,p2){
    this.p1=p1;
    this.p2=p2;
    this.p3=p3;
 
}
 
let per1 ={
    nombre: 'juan',
    apellido: ' Perez',
    nombreCompleto: function(){
        return this.nombre + ' ' +this.apellido;
    }
 
}
 
let per2 ={
nombre:'abv',
apellido: 'bcd'
 
}
 
//aremos uso de call para poder usuar las propiedades de la Persona
//con los datos de per2
//per1 y per2 tienen los mismos atributos
 
console.log(per1.nombreCompleto());
 
let pp = per1.nombreCompleto.call(per2);
 
console.log(pp);
 
 
 
let per3= {
    nombre: '123las',
    apellido:'qewtt cjtd'
 
}
 
let pp2= per1.nombreCompleto.call(per3) + '< >'+ per1.nombreCompleto.call(per2);
console.log(pp2);
 
//paso de argumentos mediante call
/**Tambien podemos pasar argumentos a la llamada de la funcion
 * Titulo y tel son parametros del metodo, por eso no se usa THIS
*/
 
let pPer = {nombre: 'agas', apellido:'gege', nombreCompleto: function(titulo, tel)
{return titulo+ ' ' + tel + ' ' + this.nombre + '' +this.apellido}
};
 
 
let pP1 = {nombre:'abce', apellido:'aaaa'};
 
let pRes1= pPer.nombreCompleto.call(pP1, 'parm1', 'param2');
console.log(pRes1);

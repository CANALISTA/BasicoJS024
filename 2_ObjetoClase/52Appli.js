//Apply, nos permite llamar un metodo que no se encuentra definido dentro de un objeto
 
 
let pperson = {nombre:'asddd', ape:'fghjk', tel:'12313',
nombreCompleto: function(titulo, correo){
 
   return  this.nombre+ ' ' + this.ape +' '+ titulo + ' ' + correo;
}
}
 
let l1= {nombre:'a1', ape:'a2'};
let l2= {nombre:'b1', ape:'b2'};
 
let rs1= pperson.nombreCompleto.call(l1,'titulo1' , 'correo1');
console.log(rs1);
 
/*Uso del metodo -> nos va permitir llamar un metodo el
cual no esta definido dentro de ese objeto y se le debe de enviar un arreglo
 como parametro, tambien podemos pasar una variable o valores de un arreglo
*/
let arreglo1 =['titulo1' , 'correo1']
let rs2= pperson.nombreCompleto.apply(l2,arreglo1);
console.log(rs2);
 
 

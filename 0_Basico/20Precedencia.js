//Precedencia de operadores

let a = 3,
  b = 2,
  c = 1;

//Se evalua de izquierda a derecha,
let z = a * b;
console.log(z);

//Luego realizar la suma de la variable C
//se hace de izquierda a drecha
z = a * b - c;
console.log(z);

/*Existe la precedencia de operadores 
15 Level                    Associativity -> Left to Right

()-> Functuin cal
[]-> Array Subscript
.-> Object Property Access
new -> Memory Allocation

----------------UNARIO---------------------------------------
14 Level                    Associativity -> Right to Left
++ -- -> Increment/Decrement
+  -  -> Unary plus/minus
!  bash -> bitwise complement
delete -> Deakkicatuin 
typeof -> Find type of variable  

----------------Operadores aritmeticos-------------------------

13 Level            Associativity-> Left to Right 


11 Level            Associativity ->Left to Right
>> -> Bitwise Right Shift
<< -> Bitwise Left Shift

10 Level 
< <= Relational Less Than // Les than Equals To
> >= Relational Greater //Greater than Equals to 

9 Level             Associativity-> Left to Right
 == -> Equality
 != Inequality
 ===Identity Operadot 
 !=== Non Identity Operator
*/

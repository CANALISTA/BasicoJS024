//Precedencia de operadores

let x = 5,
  y = 12;

let z = ++x + y++;
console.log(x);
console.log(y);
console.log(z);

//Precedencia de operadores va de izquierda a derecha
let resultado = 4 + (5 * 6) / 2;
console.log(resultado);

let pers = [(nomb = 11), (lls = 12), (ls = 321)];
let nPrtam = pers.length;
console.log(nPrtam);

for (nPrtam in pers) {
  console.log(pers[nPrtam]);
}

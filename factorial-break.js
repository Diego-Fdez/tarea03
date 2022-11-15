let factorial = 1;
let contador = 10;

while (true) {
  factorial = factorial * contador;
  contador--;
  if (contador === 1) {
    break;
  }
}
console.log(factorial);

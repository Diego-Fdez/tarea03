const returnTrue = () => true;

const saludar = new Promise((resolve, reject) => {
  setTimeout(() => resolve(), 5000);
});

saludar.then(() => console.log('Hola soy una promesa'));

function* generaIdPares() {
  let id = 0;
  while (true) {
    yield (id += 2);
  }
}

const gen = generaIdPares();

console.log(gen.next().value);

const nombre = 'Diego';
const apellido = 'Fernández';
const fullName = { nombre, apellido };

sessionStorage.setItem('info', JSON.stringify(fullName));

localStorage.setItem('info', JSON.stringify(fullName));

const now = new Date();
document.cookie = `info=${JSON.stringify(fullName)};expires="${new Date(
  now.getTime() + 2 * 60 * 1000
).toUTCString()}`;

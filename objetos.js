const datosPersonales = {
  nombre: 'Diego',
  apellido: 'Fernández',
  edad: 35,
  altura: 177,
  eresDesarrollador: true,
};

const edad = datosPersonales.edad;

const nuevaLista = [
  { ...datosPersonales },
  {
    nombre: 'Norman',
    apellido: 'Perez',
    edad: 35,
    altura: 170,
    eresDesarrollador: false,
  },
  {
    nombre: 'Rod',
    apellido: 'Aguirre',
    edad: 36,
    altura: 176,
    eresDesarrollador: false,
  },
];

const listaOrdenada = nuevaLista.sort((a, b) => b.edad - a.edad);

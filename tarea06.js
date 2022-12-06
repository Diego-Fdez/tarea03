const listaCompras = [
  'bolsa de arroz',
  'bolsa de café',
  'pasta de dientes',
  'bolsa de azucar',
  'bolsa de leche',
];

listaCompras.push('aceite girasol');

listaCompras.pop();

const peliculasFavoritas = [
  {
    titulo: 'Harry Potter y la piedra filosofa',
    director: 'Chris Columbus',
    fecha: '16 de noviembre de 2001',
  },
  {
    titulo: 'The Dark Knight Rises',
    director: 'Christopher Nolan',
    fecha: '20 de julio de 2012',
  },
  {
    titulo: 'Inception',
    director: 'Christopher Nolan',
    fecha: '9 de julio de 2010',
  },
];

const filterPeliculas = peliculasFavoritas.filter(
  (pelicula) => pelicula.fecha > '1 de enero de 2010'
);

const directoresPeliculas = peliculasFavoritas.map(
  (pelicula) => pelicula.director
);

const nombresPeliculas = peliculasFavoritas.map((pelicula) => pelicula.titulo);

const concatenaPeliculas = directoresPeliculas.concat(nombresPeliculas);

const nuevaListaPeliculas = [...directoresPeliculas, ...nombresPeliculas];

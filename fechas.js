const fechaActual = new Date();

const fechaNacimiento = new Date(1987, 10 - 1, 27);

const esMasTarde = fechaActual > fechaNacimiento;

const diaNacimiento = fechaNacimiento.getDate();

const mesNacimiento = fechaNacimiento.getMonth() + 1;

const anyoNacimiento = fechaNacimiento.getFullYear();

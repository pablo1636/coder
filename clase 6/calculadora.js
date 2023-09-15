// Importa la versión específica de Moment.js
const moment = require('moment');

// Variable que almacena la fecha actual
const fechaActual = moment();

// Variable que almacena tu fecha de nacimiento (asegúrate de usar el formato correcto)
const fechaNacimiento = moment('1990-01-01'); // Cambia esta fecha a tu fecha de nacimiento

// Valida si la fecha de nacimiento es válida
if (fechaNacimiento.isValid()) {
  // Calcula la diferencia en días entre la fecha actual y la fecha de nacimiento
  const diasPasados = fechaActual.diff(fechaNacimiento, 'days');

  // Muestra el resultado por consola
  console.log(`Han pasado ${diasPasados} días desde tu nacimiento hasta hoy.`);
} else {
  console.log('La fecha de nacimiento no es válida.');
}
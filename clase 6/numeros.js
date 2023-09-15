// Generar 10000 números aleatorios en un rango de 1 a 20
const cantidadNumeros = 10000;
const numerosAleatorios = Array.from({ length: cantidadNumeros }, () =>
  Math.floor(Math.random() * 20) + 1
);
// Crear un objeto para contar la frecuencia de cada número
const frecuenciaNumeros = {};
// Contar la frecuencia de los números
numerosAleatorios.forEach((numero) => {
  if (frecuenciaNumeros[numero]) {
    frecuenciaNumeros[numero]++;
  } else {
    frecuenciaNumeros[numero] = 1;
  }
});
// Mostrar los resultados por consola
//console.log("Números aleatorios generados:", numerosAleatorios);
//console.log("Frecuencia de los números:");
console.log(frecuenciaNumeros);
for (const numero in frecuenciaNumeros) {
  console.log(`${numero}: ${frecuenciaNumeros[numero]} veces`);
}

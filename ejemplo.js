


// function saludar( nombre ){

//     return 'hola ' + nombre;
// }

// console.log(saludar('Alejandro'));

// const saludar2 = function( nombre ){
//     return 'hola 2 ' + nombre;
// }
// console.log(saludar2('jorge'));

// const saludar3 = ( nombre ) => {

//     return 'hola 3 ' + nombre;

// }

// console.log(saludar3('cristian'));
// const saludar4 = ( nombre ) => 'hola 4 ' + nombre;

// console.log(saludar4('esteban'));

// const persona = {
//     nombre:'pablo',
//     apellido:'benitez'

// }

// const sumar = (numero1, numero2, persona ) => { 
//     let resultado = numero1 + numero2;
    
//     return resultado;

// }

// let resultado = sumar( 1, 6 , persona);
// console.log( 'El resultado es: ' +  resultado );

// variables globales

// let global = 5;

// const sumar = (numero1) => {
//     let global = 1;
//     let total = global + numero1;
//     return total;

// }

// const sumar2 = (numero1) => {
    
//     let total = global + numero1;
//     return total;

// }
// console.log('primera funcion', sumar(5));
// console.log('segunda funcion', sumar2(5));

// const nombre = 'Pedro';
// const apellido = 'Fernandez';

// let nombreCompleto = nombre + ' ' + apellido;
// let nombreCompleto2 = `${ nombre } ${ apellido }`;

// console.log(nombreCompleto);
// console.log(nombreCompleto2);

// <div>{`${ nombre } ${ apellido }`}</div>

// class Persona{


//     constructor(nombre){
//         this.nombre = nombre;
//     }
    
    
//     saludar = () => {
//         console.log('Hola mi nombre es:' ,this.nombre);
//     }
//     getespecie = (  )=>{
//         let especie = 'humano';
//         console.log('Soy un ' ,especie);
//     }
    
    
    
//     }
    
//     let persona = new Persona('Esteban');
//     let persona2 = new Persona('Jorge');
//     let persona3 = new Persona('Jorge');
    
//     persona.saludar();
//     persona.getespecie();
//     persona2.saludar();
//     persona2.getespecie();
//     persona3.saludar();
    
    
    

// let numeros = [1,2,3,4,5,6];

// let totales = numeros.map((numero,indice)=>numero**indice);
// console.log(totales);

// let nombre = ['juan','pedro','maria', 'jose', 'gabriela'];


// if (nombre.includes('jorge')){

//   console.log('Existe en el array');

// } else {

//   console.log('No existe en el array');
// }

// let impuestos = {
//   impuesto1:"2356",
//   impuesto2:"562",
//   impuesto3:"564",
//   impuesto4:"2"
// }
// let parValor = Object.entries(impuestos);
// console.log(parValor);

// let soloPropiedades = Object.keys(impuestos);
// console.log(soloPropiedades);

// let soloValores = Object.values(impuestos);
// console.log(soloValores);

// let objeto1 = {
//   propieda1: 2,
//   propieda2: 62,
//   propieda3: "b",
//   propieda4: true
// }
// let objeto2 = {
//   propieda1: "c",
//   propieda2: [1,2,3,4]
// }

// let {propieda1, propieda3} = objeto1;

// console.log(propieda3);

let cadena = `      hola   `;
console.log(cadena);
console.log(cadena.trim());

let mensaje = [];

let intentoDeMensaje = ` hola     `;

if(intentoDeMensaje.trim().length >0 ){

mensaje.push(intentoDeMensaje.trim());

} else {

  console.log('mensaje vacio');
}
console.log(mensaje);

let arrayAnidado = [1,365,[1,2,3],"b",["a","b"]];
console.log(arrayAnidado.flat());


let variablePrueba = 0;

let variable = variablePrueba || "Sin valor";

console.log(variable);

let variableNullish = variablePrueba ?? "Sin valor";
console.log(variableNullish);






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

class Persona{


    constructor(nombre){
        this.nombre = nombre;
    }
    
    
    saludar = () => {
        console.log('Hola mi nombre es:' ,this.nombre);
    }
    getespecie = (  )=>{
        let especie = 'humano';
        console.log('Soy un ' ,especie);
    }
    
    
    
    }
    
    let persona = new Persona('Esteban');
    let persona2 = new Persona('Jorge');
    let persona3 = new Persona('Jorge');
    
    persona.saludar();
    persona.getespecie();
    persona2.saludar();
    persona2.getespecie();
    persona3.saludar();
    
    
    


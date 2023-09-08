// let valoresOriginales = [1,2,3,4,5,6];

// let nuevosValores = valoresOriginales.map( x => x + 1);

// // console.log(nuevosValores);
// // console.log(valoresOriginales);

// const funcionCallback = ( valor ) => {

//   if( valor%2 ===0){
//     return valor;

//   } else {

//       return 'no es par'
//   }
// };
// const valorPar = valoresOriginales.map(funcionCallback);
//  console.log(valorPar);

//  const sumar = (numero1, numero2)=>numero1+numero2; 

//  const restar = (numero1, numero2)=>numero1-numero2;
//  const multiplicar = (numero1, numero2)=>numero1*numero2;
//  const dividir = (numero1, numero2)=>numero1/numero2;

//  const realizarOperacion = (numero1, numero2,callback)=>{
//     let resultado = callback(numero1,numero2);
//     console.log(resultado);
//  }

//  realizarOperacion(3,4,sumar);
//  realizarOperacion(3,4,restar);

// const promesa = new Promise((resolve )=>{
//     setTimeout(()=>{resolve();},9000);
// });

// promesa.then(()=>{

//   console.log('then de la promesa');
// });

const div = (dividendo, divisor) =>{

    return new Promise((resolve,reject)=>{

      if(divisor === 0){
          reject('No se acepta 0');
         
      } else {
        
        resolve(dividendo/divisor);

      }
    });
}

// div(6,0)
// .then((resultado)=>{console.log(resultado);})
// .catch((error)=>{
//   console.log(error);
// });

// const funcionAsync = async () =>{

//   try {
//       let resultado = await div(10,5);
//       console.log(resultado);
//   }
//   catch(error) {

//     console.log(error);

//   };
//   }
//   funcionAsync();

const suma = (a,b)=>{

  return new Promise((resolve, reject)=>{
    if(a===0 || b===0){
      reject("operacion innecesaria");

    } else if(a+b < 0){
      reject("La calculadora solo debe devolver valores positivos");
    }else{
      resolve(a+b);
    }
  });
 }
 const resta = (a,b)=>{

  return new Promise((resolve, reject)=>{
    if(a===0 || b===0){
      reject("operacion invalida");

    } else if(a-b < 0){
      reject("La calculadora solo debe devolver valores positivos");
    }else{
      resolve(a-b);
    }
  });
 }

 const multiplicacion = (a,b)=>{

  return new Promise((resolve, reject)=>{
    if(a<0 || b<0){
      reject("La calculadora solo debe devolver valores positivos");

    }else{
      resolve(a*b);
    }
  });
 }

 const calculos = async () => {
try{
    const resultadoSuma = await suma(5,6);
    console.log('suma: ',resultadoSuma);
    const resultadoResta = await resta(7,6);
    console.log('resta: ',resultadoResta);
} catch(error) {
console.error(error);

}

 };
 calculos();

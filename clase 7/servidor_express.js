import express from 'express';

const app = express();


app.get('/saludo',(req, res)=>{
    res.send('Hola Mundo desde express');
});

app.listen('8080',()=>{

    console.log('Servidor activo');

});
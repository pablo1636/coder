import express from 'express';

const app = express();


const usuarios = [
{id:"1", nombre:"Jorge", apellido: "Espinoza", edad:"23"},
{id:"2", nombre:"Esteban", apellido: "Fernandez", edad:"52"},
{id:"3", nombre:"Maria", apellido: "Zavala", edad:"30"}
];
app.get('/', (req, res)=>{
    res.send({ usuarios });
});
app.get('/:userID',(req, res)=>{
    let idUsario = req.params.userID;
    let usuario = usuarios.find(u => u.id === idUsario);
    if( !usuario ){ return res.send({error: "Usuario no encontrado"})  }
    res.send({ usuario });

});

app.listen('8080',()=>{

    console.log('Servidor activo');

});

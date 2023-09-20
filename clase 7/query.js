import express from 'express';
const app = express();
app.use(express.urlencoded({extended:true}));

const usuarios = [
    {id:"1", nombre:"Jorge", apellido: "Espinoza", edad:"23", genero: "M"},
    {id:"2", nombre:"Esteban", apellido: "Fernandez", edad:"52", genero:"M"},
    {id:"3", nombre:"Maria", apellido: "Zavala", edad:"30", genero:"F"},
    {id:"4", nombre:"Lucia", apellido: "Moyano", edad:"34", genero:"F"}
    ];
app.get('/',(req, res)=>{
   let genero = req.query.genero;
   if(!genero || (genero !== "M" && genero !== "F")) return res.send({ usuarios }); 
   let usuariosFiltrados = usuarios.filter(usuario => usuario.genero === genero);
   res.send({ usuariosFiltrados });
});

app.listen('8080',()=>{

    console.log('Servidor activo');

});

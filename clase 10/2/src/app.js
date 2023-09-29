//datos personales se carguen segun un num random



import express from 'express';
import handlerbars from 'express-handlebars';
import __dirname from './util.js';

const app = express();

app.engine('handlebars', handlerbars.engine());

app.set('views', __dirname+'/views');
app.set('view engine','handlebars');

app.use(express.static(__dirname+'public'));

const users = [
    { nombre: 'Juan', apellido: 'Pérez', edad: 30, correo: 'juan@example.com'},
    { nombre: 'María', apellido: 'Gómez', edad: 25, correo: 'maria@example.com'},
    { nombre: 'Carlos', apellido: 'López', edad: 35, correo: 'carlos@example.com'},
    { nombre: 'Ana', apellido: 'Martínez', edad: 28, correo: 'ana@example.com'},
    { nombre: 'Luis', apellido: 'Rodríguez', edad: 40, correo: 'luis@example.com'},
  ];
app.get('/', ( req, res)=>{
 
    
        const randomIndex = Math.floor(Math.random() * users.length);
        const randomUser = users[randomIndex];
        res.render('index', { user: randomUser } );

});




const server = app.listen(8080, ()=>{
    console.log('Servidor activo en puerto 8080');
});

server;
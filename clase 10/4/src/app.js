//views con rutas


import express from 'express';
import handlerbars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';

const app = express();

app.engine('handlebars', handlerbars.engine());

app.set('views', __dirname+'/views');
app.set('view engine','handlebars');

app.use(express.static(__dirname+'public'));



app.use('/',viewsRouter);




const server = app.listen(8080, ()=>{
    console.log('Servidor activo en puerto 8080');
});

server;
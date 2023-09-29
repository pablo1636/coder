// con iff y each


import express from 'express';
import handlerbars from 'express-handlebars';
import __dirname from './utils.js';

const app = express();

app.engine('handlebars', handlerbars.engine());

app.set('views', __dirname+'/views');
app.set('view engine','handlebars');

app.use(express.static(__dirname+'public'));


let food = [
    {name:"Hamburguesa", price:"100"},
    {name:"Banana", price:"20"},
    {name:"Soda", price:"40"},
    {name:"Ensalada", price:"120"},
    {name:"Pizza", price:"150"},
];

app.get('/', ( req, res)=>{
let testUser = {
    name: "Jose",
    last_name:"Martinez",
    role:"admin"
}

res.render('index', {
    user:testUser,
    isAdmin:testUser.role==="admin",
    food
});

});




const server = app.listen(8080, ()=>{
    console.log('Servidor activo en puerto 8080');
});

server;
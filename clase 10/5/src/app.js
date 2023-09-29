
//ultima actividad en clase


import express from 'express';
import handlerbars from 'express-handlebars';
import bodyParser from 'body-parser'; 
import __dirname from './util.js';



const app = express();

// Configura Handlebars como motor de plantillas

app.engine('handlebars', handlerbars.engine());

app.set('views', __dirname+'/views');
app.set('view engine','handlebars');
//app.set('view engine', 'handlebars');

// Configura el middleware body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Define un arreglo para almacenar usuarios registrados
const registeredUsers = [];

// Ruta para mostrar el formulario de registro
app.get('/register', (req, res) => {
  res.render('register');
});

// Ruta para procesar el formulario de registro
app.post('/user', (req, res) => {
  // Obtiene los datos del formulario
  const { name, email, password } = req.body;

  // Crea un objeto de usuario con los datos del formulario
  const newUser = { name, email, password };

  // Agrega el usuario al arreglo de usuarios registrados
  registeredUsers.push(newUser);

  // Muestra un mensaje de confirmación
  console.log('Usuario registrado:', newUser);

  // Redirige a una página de confirmación o a donde desees
  res.redirect('/confirmation');
});

// Ruta de confirmación (puedes crear una nueva plantilla para esto)
app.get('/confirmation', (req, res) => {
  res.send('¡Registro exitoso!'); // Puedes redirigir a una página de confirmación personalizada si lo deseas
});

// Inicia el servidor
const server = app.listen(8080, ()=>{
    console.log('Servidor activo en puerto 8080');
});

server;
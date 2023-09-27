import express from 'express';
import bodyParser from 'body-parser';
import usersRouter from '../routes/users.js';
import petsRouter from '../routes/pets.js';
const app = express();
const puerto = 8080;
app.use(bodyParser.json());


app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.listen(puerto, () => {
  console.log(`Servidor corriendo en el puerto: ${puerto}`);
});

import express from 'express';
const app = express();
const server = app.listen(8080, () => console.log('Servidor activo'));
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
let user = [];
app.post('/api/user', (req, res) => {
    let usuario = req.body;
    if( !usuario.nombre || !usuario.apellido ){
        return res.status(400).send({ status: "error", error: "Datos imcompletos"});
    }
    user.push( usuario );
    res.status(200).send({status:"Success", message:"Usuario creado"});
    console.log(user);
});
server;


import express from 'express';
import multer from 'multer';



const app = express();
app.use(express.urlencoded({extend: true}));
app.use(express.static('public'));

const storage = multer.diskStorage({

    destination: function (req, file, cb){

            cb(null, 'uploads');
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}-${file.originalname}`);

    }
});

const upload = multer({ storage: storage });


app.post('/subir', upload.single('miArchivo'), (req, res)=>{

    const file = req.file;
    if(!file){

        const error = new Error('error subiendo archivo');
        error.httpstatusCode= 400;
        return next(error);
    }
    res.send(`archivo sudido exitosamente`);
});
const puerto = 8080;
const server = app.listen(puerto, ()=>{
console.log('servidor activo');
});
server.on('error', error => console.log('error en servidor'));



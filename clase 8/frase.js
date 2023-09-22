import express from 'express';

const app = express();
const server = app.listen(8080, () => console.log('Servidor activo en puerto:8080'));

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));


let frase = "Frase inicial";

app.get('/api/frase', (req, res) => {
  res.json({ frase });
});


app.get('/api/palabras/:pos', (req, res) => {
  const pos = parseInt(req.params.pos) - 1; // Restamos 1 para obtener la posición correcta
  const palabras = frase.split(' ');
  
  if (pos >= 0 && pos < palabras.length) {
    res.json({ buscada: palabras[pos] });
  } else {
    res.status(404).json({ error: 'Palabra no encontrada' });
  }
});


app.post('/api/palabras', (req, res) => {
  const palabraNueva = req.body.palabra;
  frase += ` ${palabraNueva}`;
  res.json({ agregada: palabraNueva, pos: frase.split(' ').length });
});

app.put('/api/palabras/:pos', (req, res) => {
  const pos = parseInt(req.params.pos) - 1;
  const palabraNueva = req.body.palabra;
  const palabras = frase.split(' ');

  if (pos >= 0 && pos < palabras.length) {
    const palabraAnterior = palabras[pos];
    palabras[pos] = palabraNueva;
    frase = palabras.join(' ');
    res.json({ actualizada: palabraNueva, anterior: palabraAnterior });
  } else {
    res.status(404).json({ error: 'Palabra no encontrada' });
  }
});

app.delete('/api/palabras/:pos', (req, res) => {
  const pos = parseInt(req.params.pos) - 1;
  const palabras = frase.split(' ');

  if (pos >= 0 && pos < palabras.length) {
    const palabraEliminada = palabras.splice(pos, 1)[0];
    frase = palabras.join(' ');
    res.json({ eliminada: palabraEliminada });
  } else {
    res.status(404).json({ error: 'Palabra no encontrada' });
  }
});


server;

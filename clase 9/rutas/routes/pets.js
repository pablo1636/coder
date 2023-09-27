import express from 'express';


const router = express.Router();
const pets = [];
// Ruta principal para obtener usuarios
router.get('/', (req, res) => {
  res.json(pets);
});
// Ruta principal para agregar un usuario
router.post('/', (req, res) => {
  const newPets = req.body;
  pets.push(newPets);
  res.status(201).json(newPets);
});
export default router;


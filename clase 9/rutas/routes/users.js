import express from 'express';


const router = express.Router();
const users = [];
// Ruta principal para obtener usuarios
router.get('/', (req, res) => {
  res.json(users);
});
// Ruta principal para agregar un usuario
router.post('/', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});
export default router;

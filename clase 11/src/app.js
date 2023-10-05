const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const messages = [];

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log(`Cliente conectado: ${socket.id}`);
  
  // Envía la lista de mensajes al cliente que se conecta
  socket.emit('messages', messages);
  
  socket.on('message', (message) => {
    // Almacena el mensaje en el servidor
    messages.push({ socketId: socket.id, message });
    
    // Emite el mensaje a todos los clientes
    io.emit('message', { socketId: socket.id, message });
  });
  
  socket.on('disconnect', () => {
    console.log(`Cliente desconectado: ${socket.id}`);
  });
});

server.listen(8080, () => {
  console.log('Servidor escuchando en puerto 8080');
});

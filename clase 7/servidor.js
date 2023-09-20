
//import express from 'express';
const http = require('http');

const server = http.createServer((request, response)=>{

    response.end('Mi primer hola mundo');
    
});

server.listen('8080', ()=>{

        console.log('Servidor activo');
});

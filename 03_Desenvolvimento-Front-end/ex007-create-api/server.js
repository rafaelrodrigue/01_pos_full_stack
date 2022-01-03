const express = require('express');

const server = express();

server.get('/', (request, response)=>{

  return response.json({message:'Hello World!'});

})

server.listen(3003, 
  ()=>console.log('Servidor iniciado na porta http://localhost:3003'))
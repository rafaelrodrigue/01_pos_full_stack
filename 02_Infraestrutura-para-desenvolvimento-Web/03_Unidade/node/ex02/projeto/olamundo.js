var http=require('http');
http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.write('Olá Mundo! ');
  res.end();
}).listen(3000);
console.log('Servidor iniciado!');
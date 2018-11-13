const http = require('http');
const express = require('express');
const app = express();
const io = require('socket.io');

const server =http.createServer(app);
//app.get('/', function (req,res){
//	res.end("mi chat iniciado");
//}); 

app.set('port', 3000);
app.use(express.static(__dirname + "/public"));

server.listen(app.get('port'), function(){
	console.log('el servidor iniciado');
})

var sockets =io.listen(server);

sockets.on('conection', function (socket){
	console.log('nuevo cliente conectado');

	socket.on('mensaje-del-cliente', function (data){
		//console.log(data);    *lo muestra por consola 
		sockets.emit('mensaje-del-servidor',data);
	});
});
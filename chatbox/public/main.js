$ (function (){

	//socket iniciado
	var socket =io();
	//console.log("el contenido esta cargado");
	var message =$('#chat-message');
	var chat =$('#chat');

    message.focus();

	$('#message-box').submit(function(e){
		e.preventDefault();

		//chat.append(message.val() + "<br/>");
	    socket.emit('mensaje-del-ciente',message.val());
	    message.val('');

	  
	});
	socket.on('mensaje-del-servidor',function(data){
		//console.log(data);
		chat.append(data + "<br/");
	});
	});


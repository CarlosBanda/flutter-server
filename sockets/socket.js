const {io} = require('../index')
//mensajes sockets
io.on('connection', client => {
    console.log('Cliente conectado')
    
    client.on('disconnect', () => { 
        console.log('Cliente desconectado')
    });

    client.on('mensaje', (payload)=>{
        console.log('Mensaje!!!!!', payload);

        io.emit('mensaje', {admin: 'Nuevao Mensaje'})
    });
  });
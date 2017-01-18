module.exports = function (socket, io) {
    socket.emit('init',{
        name: 'Test Message'
    });

    socket.on('Event::PostCreate',function(data){
       console.log(data);
        socket.broadcast.emit('Event::PostCreate', data);
    });
};


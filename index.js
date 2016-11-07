// start
// note, io(<port>) will create a http server for you
var io = require('socket.io')(80);

/*
io.on('connection', function (socket) {
  io.emit('this', { will: 'be received by everyone'});

  socket.on('private message', function (from, msg) {
    console.log('I received a private message by ', from, ' saying ', msg);
  });

  socket.on('disconnect', function () {
    io.emit('user disconnected');
  });
});
*/
//
io.on('connection', function (socket) {
socket.emit('status', {value: "connected"});

socket.on('test', function (data) {
    socket.emit('msg',{value: "got > " + data.value});
});

});
console.log('server started');

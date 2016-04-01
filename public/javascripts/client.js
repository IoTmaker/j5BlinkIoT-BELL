angular.module('myApp', [ 'btford.socket-io']).
factory('mySocket', function (socketFactory) {
  return socketFactory({
        ioSocket: io('http://localhost:9010')
    });
}).
controller('ArduinoController', function (mySocket) {
  var vm = this;
    vm.ledOn = function () {
      socket.emit('led:on');
      console.log('LED ON');
    };

    vm.ledOff = function () {
      socket.emit('led:off');
      console.log('LED OFF');
    };
});


var socket = io.connect('http://localhost:9010');

socket.on('connect', function() { console.log('connected to server'); });
socket.on('event', function(data) { console.log('event:', data); });
socket.on('disconnect', function() { console.log('disconnected'); });

socket.on('news', function(data) {
  console.log('received news:', data);
  console.log('sending my other event');
  socket.emit('my other event', { hello: 'this message was sent from client' });
});

socket.on('weather', function(data) {
  console.log('received weather:', data);
});


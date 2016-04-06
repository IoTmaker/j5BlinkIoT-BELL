angular.module('myApp', [ 'btford.socket-io']).
factory('mySocket', function (socketFactory) {
  return socketFactory({
    // this line was missing from the angular-socket.io tutorial.
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



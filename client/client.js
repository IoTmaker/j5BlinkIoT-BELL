angular.module('IoT', [ 'btford.socket-io']).
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

    socket.on('sensorData', function(data){
    console.log('data recieved. tempC: ', data.temp + " %RH: " + data.humidity);
    vm.temperature = data.temperature;
    vm.humidity = data.humidity;
  });

});

// angular.module('IoT')
// .controller('sensorCtrl', sensorCtrl);

// // ensures that functions are properly compiled
// sensorCtrl.$inject = ['$http'];

// function sensorCtrl($http){

// }



var socket = io.connect('http://localhost:9010');

socket.on('connect', function() { console.log('connected to server'); });
socket.on('event', function(data) { console.log('event:', data); });
socket.on('disconnect', function() { console.log('disconnected'); });



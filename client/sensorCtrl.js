angular.module('IoT', [ 'btford.socket-io']).
factory('mySocket', function (socketFactory) {
  return socketFactory({
  // this line was missing from the angular-socket.io tutorial.
      ioSocket: io('http://localhost:9010')
  });
}).controller('sensorCtrl', function (mySocket) {
  var vm = this;

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

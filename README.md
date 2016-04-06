# j5BlinkIoT-BELL

This project combines an node server with express and websockets and Johnny-five
to control an Arduino Uno connected via USB to the server host.  The client app uses
websockets for communicationv with the server and Angular1 for views.  The Arduino
Uno is loaded with Firmata to accept control via usb from the Johnny-five module.

## Future Features:
- User authentication
- MQTT over websockets
- Setup routing from front end for new devices
- Add security for each device - hash that must be added to the IoT device
- Database- PostgreSQL or other relational db
- Google Oauth
- Google Fusion Tables - data saved to tables and retrievable by user, the table URL available in app
- Multiple streams from multiple devices
- each device has an icon
- each stream has an appropriate visual - ie thermometer, graph, heat map


## Todo:
- write blog post - incude in this readme
- Host - include directions about how to host the app
- make login --> passport?
- Include OAuth to set up fusion tables
- add db for data logging - use PostgreSQl for practice with Node.js t
- Add MQTT over websockets

## How this project was created:
- used the express generator, $`express [nameOfProject]`
- used npm to install johnny-five, socket.io and socket.io-client
- installed angular and angular-socket-io via bower
- (BtFord's angular-socket.io)[https://github.com/btford/angular-socket-io] has a
great tutorial. One crucial line of code `ioSocket: io('http://localhost:9010')` was missing from the client.js file.  In this example
it's line 5 after the comment.

###To set up this project on your local machine:
- clone the repo
- npm install

#### References:
//note the misspelling of johnny to jhonny below
https://www.codetutorial.io/nodejs-socket-io-and-jhonny-five-to-control-arduino/
https://github.com/btford/angular-socket-io
https://github.com/rwaldron/johnny-five

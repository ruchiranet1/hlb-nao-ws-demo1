/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

//var ws = require( 'ws' );

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

/*// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});*/


 //handler server 
app.get('/server', function (req, res) {

  //test websocket
  console.log("server: starting websocket server...");

  var port = (process.env.PORT || 8888); 

  var WebSocketServer = require('ws').Server;

  var wss = new WebSocketServer({port: port});
  wss.on('connection', function(ws) {
      ws.on('message', function(message) {
          console.log('server: received: %s', message);
          ws.send('echo: ' + message);
      });
      ws.send('connected');
  });

  console.log("server: listening  websocket on " + appEnv.url + " - port " + port );
  res.send('SERVER - listening websocket on: ' + appEnv.url + " port " + port);

});



app.listen(appEnv.port, function () { console.log('Listening on ' + appEnv.url) });


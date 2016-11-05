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
//var app = express();
//
//// serve the files out of ./public as our main files
//app.use(express.static(__dirname + '/public'));
//
//// get the app environment from Cloud Foundry
//var appEnv = cfenv.getAppEnv();
//
///*// start server on the specified port and binding host
//app.listen(appEnv.port, '0.0.0.0', function() {
//  // print a message when the server starts listening
//  console.log("server starting on " + appEnv.url);
//});*/
//
//
// console.log("server: starting websocket server...pos1");
//
// //handler server 
//app.get('/server', function (req, res) {

  //test websocket
  console.log("server: starting websocket server...pos2");

  var Server = require('ws').Server;
  var port = (process.env.PORT || 8888); 
  
   console.log("server: starting websocket server...port"+port);
  
  var ws = new Server({port: port});
 
  ws.on('connection', function(w){
  
  w.on('message', function(msg){
    console.log('message from client');
  });
  
  w.on('close', function() {
    console.log('closing connection');
  });

});

//  console.log("server: listening  websocket on " + appEnv.url + " - port " + port );
//  res.send('SERVER - listening websocket on: ' + appEnv.url + " port " + port);
//
//});



//app.listen(appEnv.port, '0.0.0.0', function() {
//  // print a message when the server starts listening
//  console.log("server starting on " + appEnv.url);
//});


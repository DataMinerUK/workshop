/* *
 * Start by requiring in the http module,
 * and make your own server!
 */

"use strict";

var http = require('http');
var fs = require('fs');
var nodeStatic = require('node-static');
var port = 8888;
var fileServer = new nodeStatic.Server('./public');

http.createServer(function (request, response) {
  request.addListener('end', function () {
      //
      // Serve files!
      //
      fileServer.serve(request, response);
  }).resume();
}).listen(port);

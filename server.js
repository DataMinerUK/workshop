/* *
 * Start by requiring in the http module,
 * and make your own server!
 */

"use strict";

var http = require('http');
var fs = require('fs');
var port = 8888;

function handler(request,response) {
  var url = request.url;
  if (url === "/") {
      response.writeHead(200, {"Content-type": "text/html"});
      response.end("<h1>Hello World!</h1>");
  }
}

http.createServer(handler).listen(port);

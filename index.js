console.log("Creating server");

// Gets the required components
var server = require("./server.js");
var router = require("./router.js");
var pageserver = require("./pageserver.js");

// Starts the server.
server.Start(router.route, pageserver.serve, pageserver.reqtype);

// this is from: 
// http://stackoverflow.com/questions/17478566/using-node-js-to-serve-up-basic-web-page-with-css-and-js-includes

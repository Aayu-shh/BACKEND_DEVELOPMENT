/*
Core Modules Node ships with

http    -   launch server, Send reqs
https   -   launch SSL encrypted server
fs      -   file system
path
os
*/

//require - import files/paths/modules
const myName = "Aayush";
const http = require('http');
const fs = require('fs');
const routes = require('./routes');

const server = http.createServer(routes.handler);
console.log(routes.someText);       //Prints 1st Asyncly
server.listen(4000);
/*
Core Modules Node ships with

http    -   launch server, Send reqs
https   -   launch SSL encrypted server
fs      -   file system
path
os
*/

//require() - import files/paths/modules

const http = require('http');

const routes = require('./routes');         //Holds requestHandler function

const server = http.createServer(routes);
server.listen(4000);
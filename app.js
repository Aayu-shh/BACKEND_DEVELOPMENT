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

const server = http.createServer((req,res) => {
    console.log(myName);
    console.log(res);
})

server.listen(4000);
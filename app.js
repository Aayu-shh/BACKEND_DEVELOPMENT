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
    console.log("URL: ",req.url," \n Method:",req.method,"\n HEADERSSS: ",req.headers);
    
    res.setHeader('Content-Type','text/html');
    //.write() works in chunks like -
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write("<body style='text-align: center'><h1> Hello from my Node.js Server!!</h1></body>");    
    res.write('</html>');
    res.end();      //No .write() method now --> if written ERROR thown
    //process.exit();
})

server.listen(4000);
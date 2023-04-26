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
    const url = req.url;
    if(url == '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write(`<body><form action='/home' method ='POST'><input type='text' name='msg'><button type='submit'>Send</button></form></body>`);
        res.write('</html>');
        return res.end();
    }
//Task7_ final Deliverable
    if(url=="/home"){
        res.write("<html>");
        res.write("<head><title>My First Project page</title></head>");
        res.write("<body style='text-align: center'><h1>Welcome to my Home Page!</h1></body>")
        res.write("</html>");
        return res.end();
    }

    if (url == "/about") {
        res.write("<html>");
        res.write("<head><title>My First Project page</title></head>");
        res.write("<body style='text-align: center'><h1>Welcome to my About Page!</h1></body>")
        res.write("</html>");
        return res.end();
    }

    if (url == "/node") {
        res.write("<html>");
        res.write("<head><title>My First Project page</title></head>");
        res.write("<body style='text-align: center'><h1>Welcome to my Node JS project!</h1></body>")
        res.write("</html>");
        return res.end();
    }

    //RUNs if none of the above runs

    res.setHeader('Content-Type','text/html');
    //.write() works in chunks like -
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write("<body style='text-align: center'><h1> Hello from My Node.js Server!!</h1></body>");    
    res.write('</html>');
    res.end();      //No .write() method now --> if written ERROR thown
    //process.exit();
})

server.listen(4000);
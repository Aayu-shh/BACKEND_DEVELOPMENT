const fs = require('fs');

const requestHandler = (req,res) =>{
    const url = req.url;
    const method = req.method;
if (url == '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(`<body><form action='/message' method ='POST'><input type='text' name='msg'><button type='submit'>Send</button></form></body>`);
    res.write('</html>');
    return res.end();
}
if (url == '/message' && method == 'POST') {
    const body = [];
    req.on('data', (chunk) => {                                       //data event is fired every time a new data chunk is ready to read
        console.log(chunk);
        body.push(chunk);
    });
    return req.on('end', () => {
        //To interact with chunks
        const parsedBody = Buffer.concat(body).toString();                  //To compile the chunks and toString() it
        const message = parsedBody.split("=")[1];                           //message value is AFTER =
        fs.writeFile('message.txt', message, err => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    });
}

//Task7_ final Deliverable
if (url == "/home") {
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

res.setHeader('Content-Type', 'text/html');
//.write() works in chunks like -
res.write('<html>');
res.write('<head><title>My First Page</title></head>');
res.write("<body style='text-align: center'><h1> Hello from My Node.js Server!!</h1></body>");
res.write('</html>');
res.end();      //No .write() method now --> if written ERROR thown

}

//Export Way1
//module.exports = requestHandler;


//Export Way2   -multiple
// module.exports={
//     handler : requestHandler,
//     someText : "some hard coded text"
// };

//Export Way3 - multiple
// module.exports.handler=requestHandler;
// module.exports.someText = "Some hard Coded Text";

//Way4 - for Multiple
exports.handler = requestHandler;
exports.someText = "Some hard Coded Text";






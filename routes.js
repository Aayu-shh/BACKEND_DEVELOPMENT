const fs = require('fs');

const requestHandler = (req,res) =>{
    const url = req.url;
    const method = req.method;

    if (url === '/') {

        fs.readFile("message.txt",{encoding:'utf-8'}, (err,data)=>{
            if(err){
                console.log(err)
            }
            console.log("Inside readFIle, data>>>>", data);
            res.write("<html>");
            res.write("<head><title>Enter Message</title></head>");
            res.write(`<body>${data}</body>`);
            res.write("<body><form action='/message' method ='POST'><input type='text' name='msg'><button type='submit'>Send</button></form></body>");
            res.write("</html>");
            return res.end();
        })
        console.log("inside url = / after readFile method");
    }

    else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {                                       //data event is fired every time a new data chunk is ready to read
            //console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            //To interact with chunks
            const parsedBody = Buffer.concat(body).toString();                  //To compile the chunks and toString() it
            const message = parsedBody.split("=")[1];                           //message value is AFTER =
            fs.writeFile('message.txt', message, err => {
                if(err){
                    console.log(err);
                }
                res.statusCode = 302;
                res.setHeader('Location', '/');                 //Redirect to base - / page
                console.log("inside writeFileMethod")
                return res.end();
            });
            console.log("insude req.on end event after writeFile")
        });
    }
    else{
        res.setHeader('Content-Type', 'text/html');
        //.write() works in chunks like -
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write("<body style='text-align: center'><h1> Hello from My Node.js Server!!</h1></body>");
        res.write('</html>');
        res.end();
    }
}

exports.handler = requestHandler;

//Export Way1 single/multiple
//module.exports = requestHandler;
//OR
//module.exports.handler = requestHandler;
//module.exports.someText=someText


//Export Way2   -multiple
// module.exports={
//     handler : requestHandler,
//     someText : "some hard coded text"
// };

//Export Way3 - multiple
// module.exports.handler=requestHandler;
// module.exports.someText = "Some hard Coded Text";

//Way4 - for Multiple
//exports.handler=requestHandler;
//exports.someText=someText;






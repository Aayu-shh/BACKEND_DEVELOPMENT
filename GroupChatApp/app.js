const express = require('express');
const bodyParser = require('body-parser');

const fs = require('fs');
//const localStorage = require('localStorage');

const app = express();

var user;

app.use(bodyParser.urlencoded({extended:false}));

app.use('/login', (req, res, next) => {
    fs.readFile('./GroupChatApp/chats.txt', (err, data) => {
        if (err) console.log(err);
        res.send(`<html><head><title>Login Page</title></head><body><form action='/' onsubmit="localStorage.setItem('username',document.getElementById('user').value)" method='POST'><input type='text' id=user name='username' placeholder='Enter Username'><button type='submit'>LOGIN</button></form></body></html>`);
    });

});

app.use('/',(req,res,next)=>{
    if (req.body.username && req.body.msg) fs.appendFileSync('./GroupChatApp/chats.txt', `${req.body.username}:${req.body.msg} `); 
    fs.readFile('./GroupChatApp/chats.txt', (err, data) => {
        if (err) console.log(err);
        res.send(`<html><head><title>Enter Message</title></head><body></body>${data}<body><form action='/' onsubmit="document.getElementById('user').value=localStorage.getItem('username')" method='POST'><input type="text" name="msg"><input type="hidden" id='user' name='username'><button type="send">Send Message</button></form></body</html>`);
    })
});

app.get('/',(req,res,next)=>{
    console.log('Invalid URL');
    res.status(404).send('<h1>Page Not found,, try: </h1><br/><h2>/login</h2>')
})

app.listen(8080);


//fix routing

// get /login => save user to local storage POST display / => POST display /  => loop


//Doubts
//Issue: on REFRESH (Ctrl+F5) after a POST message, Same old request with last message is sent to chat.txt and that is diplayed with userName:lastMessage
//Fix: click on address bar and press enter , reentering the address and sending a GET request --- to app.use()

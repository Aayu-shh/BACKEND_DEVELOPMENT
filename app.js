/*
Core Modules Node ships with

http    -   launch server, Send reqs
https   -   launch SSL encrypted server
fs      -   file system
path
os
*/

//require() - import files/paths/modules

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//MiddleWare function
//Automatically calls next()
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req, res, next) => {
    res.send('<form action="/product" method="POST"><label>Poduct Name:</label><input type="text" name="title"><br><label>Poduct Size:</label><input type="text" name = "size"><br><button type="submit">ADD PRODUCT</button></form>');
});

//Can be placed anywhere just before last "/" Only enters incase of POST requests
app.post('/product',(req,res,next)=>{                                    
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(4000);
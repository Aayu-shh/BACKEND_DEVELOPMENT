/*
Core Modules Node ships with

http    -   launch server, Send reqs
https   -   launch SSL encrypted server
fs      -   file system
path
os
*/

//require() - import files/paths/modules
const path = require('path');
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');
const contactRouter = require('./routes/contactus');

//MiddleWare functions Below 2 Automatically calls next()

app.use(bodyParser.urlencoded({extended:false}));

//Serving CSS files in public folder to Browser directly
app.use(express.static(path.join(__dirname,'public')));

app.use('/success',(req,res,next)=>{
    console.log("User Details: \n name",req.body.name,"\n Email Id:",req.body.email);
    res.send("<h1>Form Sucessfully filled</h1>");
})


app.use('/admin',adminRoutes);
app.use('/shop',shopRouter);
app.use(contactRouter);

//catch all rooute
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(4000);
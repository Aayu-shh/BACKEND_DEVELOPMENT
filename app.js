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

const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');
//MiddleWare function
//Automatically calls next()
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use('/shop',shopRouter);

//catch all rooute
app.use((req,res,next)=>{
    res.status(404).send('<h1>PAge NOT found , try any of the following routes:-</h1><br><br><h2>/admin/add-product</h2><h2>/shop</h2>')
});

app.listen(4000);
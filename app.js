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

const app = express();

app.use((req,res,next)=>{
    console.log('In the Middleware');
    next();
});

app.use((req, res, next) => {
    console.log('In Another Middleware');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(4000);
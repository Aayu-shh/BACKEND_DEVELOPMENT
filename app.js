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
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactus');

const errorController = require('./controllers/error');
const successController = require('./controllers/success');
//MiddleWare functions Below 2 Automatically calls next()

app.use(bodyParser.urlencoded({extended:false}));

//Serving CSS files in public folder to Browser directly
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use(contactRoutes);
app.use('/success',successController.getSuccessPage);
//catch all rooute
app.use(errorController.error404);

app.listen(4000);
/*get/post - matches the PATH exactly - not just base '/' like .use does
* path join - detects OS - builds correct path irrespective of OS used to run code
* __dirname -> gives ABSOLUTEpath to current folder 
*/

const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /shop/ => GET
router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
})

module.exports = router;
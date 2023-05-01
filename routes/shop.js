const express = require('express');

const router = express.Router();

//get/post - matches the PATH exactly - not just base '/' like .use does
// /shop/ => GET
router.get('/',(req,res,next)=>{
    res.send("<h1>Hello from shops.js Express");
})

module.exports = router;
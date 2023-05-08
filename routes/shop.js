/*get/post - matches the PATH exactly - not just base '/' like .use does
* path join - detects OS - builds correct path irrespective of OS used to run code
* __dirname -> gives ABSOLUTEpath to current folder 
*/

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// /shop/ => GET
router.get('/',productsController.getShopProducts)

module.exports = router;
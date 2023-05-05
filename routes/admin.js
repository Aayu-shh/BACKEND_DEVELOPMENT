const path = require('path');
const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop');
});

module.exports = router;



    //Alternate res.sendFile - direct HTML form
    // res.send(
    //     '<form action="/admin/add-product" method="POST"><label>Poduct Name:</label><input type="text" name="title"><br><label>Poduct Size:</label><input type="text" name = "size"><br><button type="submit">ADD PRODUCT</button></form>'
    //     );
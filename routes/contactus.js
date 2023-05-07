const express = require('express');

const router = express.Router();
const contactsController = require('../controllers/contacts');

router.get('/contactus', contactsController.getContactPage);

module.exports = router;
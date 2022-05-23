var express = require('express');
var router = express.Router();
const control = require('../controler/order');
router.post('/addorder', control.addorder);
router.get('/', control.getorder);
module.exports = router;
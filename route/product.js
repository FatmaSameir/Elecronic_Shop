var express = require('express');
var router = express.Router();
const control = require('../controler/product');
router.post('/addproduct', control.addproduct);
router.get('/', control.getproduct);
module.exports = router;
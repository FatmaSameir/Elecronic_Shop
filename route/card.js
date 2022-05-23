var express = require('express');
var router = express.Router();
const control = require('../controler/card');
router.post('/addcard', control.addcard);
router.get('/', control.getcard);
module.exports = router;
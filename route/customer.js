var express = require('express');
var router = express.Router();
const control = require('../controler/customer');
router.post('/addcustomer', control.addcustomer);
router.get('/', control.getcustomer);
router.get('/:id', control.getonecustomer);
router.patch('/:id', control.updatecustomer);
router.delete('/:id', control.deletecustomer);
module.exports = router;
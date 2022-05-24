var express = require('express');
var router = express.Router();
const control = require('../controler/aggregation');
router.post('/addaggregation', control.addaggregation);
router.get('/match',control.matchaggregation)
router.get('/unwind',control.unwindaggregation)
router.get('/group',control.groupaggregation)
router.get('/addfield',control.addFieldaggregation)
router.get('/project',control.projectaggregation)
router.get('/lookup',control.lookupaggregation)





module.exports = router;

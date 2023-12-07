var express = require('express');
var router = express.Router();
var queryContrller = require('../controller/QueryController');

router.get('/',queryContrller.query);
router.get('/new/lead',queryContrller.insertLead)
router.get('/delete/lead',queryContrller.deleteLead);

module.exports = router;
var express = require('express');
var router = express.Router();
var queryContrller = require('../controller/queryController');

router.get('/',queryContrller.query);

module.exports = router;
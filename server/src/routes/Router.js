var express = require('express');
var router = express.Router();
var queryContrller = require('../controller/actionController');

router.post('/query', 
    queryContrller.query);

router.post('/new/:sobject', 
    queryContrller.insert);

router.get('/delete/:sobject/:id', 
    queryContrller.delete);

router.post('/update/:sobject', 
    queryContrller.update);

module.exports = router;
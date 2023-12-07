var express = require('express');
var router = express.Router();

router.get('/',(req,res,next) => {
    res.render('welcome.html');
});

router.get('/login',(req,res,next) => {
    res.render('login.html');
});

router.post('/login',(req,res,next) => {
    res.render('login.html');
});

router.get('/index',(req,res,next) => {
    res.render('index.html');
});

module.exports = router;
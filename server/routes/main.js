var express = require('express');
var router = express.Router();

// create new record
router.get('/setting',(req,res,next) => {
    res.render('setting/setting.html');
});

router.get('/accounting',(req,res,next) => {
    res.render('new/newAccount.html');
});
router.get('/todo',(req,res,next) => {
    res.render('new/newTodo.html');
});

router.get('/diary',(req,res,next) => {
    res.render('new/newDiary.html');
});

router.get('/treehole',(req,res,next) => {
    res.render('new/newTreeHole.html');
});

// menu action router
router.get('/',(req,res,next) => {
    res.render('setting/my.html');
});

router.get('/todo',(req,res,next) => {
    res.render('list/todo.html');
});

router.get('/diary',(req,res,next) => {
    res.render('list/diary.html');
});

router.get('/accounting',(req,res,next) => {
    res.render('list/accounting.html');
});

router.get('/treehole',(req,res,next) => {
    res.render('list/treehole.html');
});

router.get('/store',(req,res,next) => {
    res.render('setting/store.html');
});

router.get('/help',(req,res,next) => {
    res.render('setting/help.html');
});

module.exports = router;
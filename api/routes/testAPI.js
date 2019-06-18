var express = require('express');
var router = express.Router();

const initialMessage = {"list":[
    {"Message": "Welcome to sfsf dfdsfs", "Detail":""},
    {"Message": "First message here", "Detail":""},
    {"Message": "Second message here", "Detail":""},
]}

router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(initialMessage);
});

router.post('/', function(req, res, next) {
    const newMessage = req.body;
    initialMessage.list.push(newMessage);
    res.setHeader('Content-Type', 'application/json');
    res.send(newMessage);
});


module.exports = router;
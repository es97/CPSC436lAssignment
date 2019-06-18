var express = require('express');
var router = express.Router();

const initialMessage = [
    {"message": "Welcome to sfsf dfdsfs", "detail":""},
    {"message": "First message here", "detail":""},
    {"message": "Second message here", "detail":""},
]

router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(initialMessage));
});

router.post('/', function(req, res, next) {
    const newMessage = req.body;
    initialMessage.push(newMessage);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(newMessage));
});

router.delete('/', function(req, res, next) {
    messageToDelete = initialMessage.slice()
    for(let i in messageToDelete){
        initialMessage.pop()
    }
    res.json(messageToDelete);
});


module.exports = router;
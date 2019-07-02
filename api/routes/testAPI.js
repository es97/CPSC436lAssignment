var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// added mongoDB
const mongo = require('mongodb').MongoClient
const Schema = mongoose.Schema;
const url = 'mongodb+srv://es97:199711278@cluster0-0v3vy.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(url, {useNewUrlParser: true});

// this will be our data base's data structure
const MessageSchema = new Schema(
    {
      message: {type:String, require:true}
    }
)

var Message = mongoose.model("Message",MessageSchema)

const initialMessage = [
    {"message": "Welcome to sfsf dfdsfs"},
    {"message": "First message here"},
    {"message": "Second message here"},
]

// router.get('/', function(req, res, next) {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify(initialMessage));
// });

router.get('/', function(req, res) {
    Message.find({},function (err, initialMessage){
        console.log("get")
        if(err){
            console.log(err)
            return res.send(500, err)
          }
          else{
             return(res.json(initialMessage))
          }
    })
});

router.post('/', function(req, res, next) {
    const newMessage = req.body;
    if(!isEmpty(newMessage)){
        const message = new Message({newMessage});
    }
    Message.create(message, function(err, Message){
        if(err){
            return res.send(400, err)
        }
        else{
            console.log("req.body.message is : " + req.body.message)
            res.status(200).json(message)
            res.send("Message saved to database");
        }
    })
    // message.save()
    // .then(msg => res.json(msg))
    // .catch(()=> res.status(400).json({error: 'Failed to add messages'}))
    // initialMessage.push(newMessage);
    // res.setHeader('Content-Type', 'application/json');
    // res.send(JSON.stringify(newMessage));
});

router.delete('/', function(req, res, next) {
    Message.deleteMany({}, function(err){
        if (err) {
            console.log(err)
        } else {
            res.end('successfully delete');
        }
})

// messageToDelete = initialMessage.slice()
// for(let i in messageToDelete){
//     initialMessage.pop()
// }
// res.json(messageToDelete);

module.exports = router;
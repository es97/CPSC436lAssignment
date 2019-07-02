var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const initialMessage = [
    {"message": "Welcome to sfsf dfdsfs"},
    {"message": "First message here"},
    {"message": "Second message here"},
]

const Schema = mongoose.Schema;

// this will be our data base's data structure
const MessageSchema = new Schema(
    {
      message: {type:String, require:true}
    }
)

var Message = mongoose.model("Message",MessageSchema)

//load initial message
  initialMessage.forEach(element => {
    console.log(element);
      let msg = new Message(element)
      msg.save(function (err) {
        if (err) return console.error(err);
      });
  });

router.get('/', function(req, res, next) {
    Message.find((err, message) => {
        if (err){
            console.log(err);
            return res.send(500, err);
        }
        else{return res.json(message);}
      });
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    const newMessage = req.body
    let data = new Message(newMessage);
    data.save(function (err,message){
        if (err){
            console.error(err);
            return res.status(400).json({error: 'Failed to add messages'});
        }
        return res.json(message);
      });
});

router.delete('/', function(req, res, next) {
    Message.deleteMany({}, function(err){
        if (err) {
            console.log(err)
        } else {
            res.send([]);
        }
    })
});

router.delete('/:id', function(req, res, next) {
    console.log(req);
    console.log(req.params.id);
    const itemId = mongoose.Types.ObjectId(req.params.id);
    Message.deleteOne({_id:itemId}, function(err,message){
        if (err) {
            console.log(err)
        } else {
            res.send(message);
        }
    })
});

module.exports = router;
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const schema = mongoose.Schema({
    msg: {
        type: String
    },
    sender: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'User'
        type: Number
    },
    reciever: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'User'
        type: Number
    }
});

router.post('/', (req, res) => {
    const MessageCollection = getSchema(req);
    const message = {
        msg: req.body.message,
        sender: req.user.mobileNumber,
        reciever: req.body.mobileNumber
    };
    const Message = new MessageCollection(message);
    Message.save((err, docs) => {
        if (err) {
            res.json(err);
        } else {
            res.json(docs);
        }
    });
});

router.post('/chat', (req, res) => {
    const MessageCollection = getSchema(req);
    MessageCollection.aggregate([
        {
            $project: {
                _id: 0,
                'message': '$msg',
                'sender': {
                    $cond: [{ $eq: [ "$sender", req.user.mobileNumber] }, true, false]
                }
            }
        }
    ], (err, docs) => {
        if (err) {
            res.json(err);
        } else {
            res.json(docs);
        }
    });
});

function getSchema(req) {
    const userMobile = req.user.mobileNumber;
    const recieverMobile = req.body.mobileNumber;
    const mongooseSchema = userMobile < recieverMobile ? userMobile.toString() + recieverMobile.toString() : recieverMobile.toString() + userMobile.toString();
    return mongoose.model(mongooseSchema, schema);
}

module.exports = router;
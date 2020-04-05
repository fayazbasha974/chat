const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const schema = mongoose.Schema({
    msg: {
        type: String
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    reciever: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

router.post('/', (req, res) => {
    const userMobile = req.user.mobileNumber;
    const recieverMobile = req.body.mobileNumber;
    const mongooseSchema = userMobile < recieverMobile ? userMobile.toString() + recieverMobile.toString() : recieverMobile.toString() + userMobile.toString();
    const MessageCollection = mongoose.model(mongooseSchema, schema);
    const message = {
        msg: req.body.message,
        sender: req.user.id,
        reciever: req.body.id
    };
    const Message = new MessageCollection(message);
    Message.save((err, docs) => {
        if(err) {
            res.json(err);
        } else {
            res.json(docs);
        }
    });
});

module.exports = router;
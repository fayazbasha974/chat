const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = mongoose.model('User');

router.get('/', (req, res) => {
    User.find({_id: req.user.id}).populate('friends', ['displayName', 'mobileNumber']).exec((err, docs) => {
        if (err) {
            res.json(err);
        } else {
            res.json(docs[0]);
        }
    });
});

module.exports = router;
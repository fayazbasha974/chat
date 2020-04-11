const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.post('/', (req, res) => {
    User.find({mobileNumber: req.body.mobileNumber}, (err, docs) => {
        if (err) {
            res.json(err);
        } else {
            res.json(docs);
        }
    });
});

module.exports = router;
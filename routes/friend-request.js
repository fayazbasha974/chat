const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.post('/', (req, res) => {
    User.update(
        { 
            mobileNumber: req.body.mobileNumber
        },
        {
            $push: {
                'friendRequests': req.user.id
            }
        }, (err, docs) => {
            if (docs) {
                res.json({message: 'updated'});
            } else {
                res.json({error: err});
            }
    });
});

module.exports = router;
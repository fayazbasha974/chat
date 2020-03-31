const express = require('express');
const router = express.Router();
require('../schema/user');
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.post('/', async (req, res) => {
    const user = new User(
        req.body
    );
    user.save((err, doc) => {
        if (err) {
            res.json({'error': err});
        } else {
            res.status(200).json({ 'docs': doc });
        }
    })
});

module.exports = router;
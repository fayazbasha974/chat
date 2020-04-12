require('../schema/user');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

module.exports = function(app) {
    app.post('/login', async function(req, res, next) {
        try {
            const user = await User.find({mobileNumber: req.body.mobileNumber});
            if (user && user.length) {
                if (!bcrypt.compareSync(req.body.password, user[0]['password'])){
                    res.json({error: 'invalid password'});
                } else {
                    const token = jwt.sign({mobileNumber: req.body.mobileNumber, id: user[0]['_id']}, 'secret', {
                        // expiresIn: 600
                    });
                    res.json({ success: 'login succesfully', token});
                }
            } else {
                res.json({message: 'Not a member'});
            }
        } catch(error) {
            res.json({ 'error': error });
        }
        next();
    });
};
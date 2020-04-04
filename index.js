const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv/config');

app.use(bodyParser.json());
app.use('/auth', require('./routes/auth'));

app.use('/login', require('./routes/login.js'));
app.use('/signup', require('./routes/signup.js'));
app.use('/auth/friendRequest', require('./routes/friend-request'));
app.use('/auth/acceptRequest', require('./routes/accept-request'));

mongoose.connect(process.env.mongoDB, (...args) => {
    console.log('DB connected');
})

app.listen(process.env.port, (...args) => {
    console.log('connected');
});

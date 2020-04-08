const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());
app.use('/auth', require('./routes/auth'));

app.use('/login', require('./routes/login.js'));
app.use('/signup', require('./routes/signup.js'));
app.use('/auth/friendRequest', require('./routes/friend-request'));
app.use('/auth/acceptRequest', require('./routes/accept-request'));
app.use('/auth/getDetails', require('./routes/get-details'));
app.use('/auth/message', require('./routes/message'));

mongoose.connect(process.env.mongoDB, (...args) => {
    console.log('DB connected');
})

app.listen(process.env.port, (...args) => {
    console.log('connected');
});

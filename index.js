const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const socketIO = require('socket.io');
let users = 0;

require('dotenv/config');

mongoose.connect(process.env.mongoDB, (...args) => {
    console.log('DB connected');
});

const server = app.listen(process.env.port, (...args) => {
    console.log('connected');
});

const io = socketIO(server);

io.on('connection', (socket) => {
    users++;
    console.log('socket connected', socket.id, users);
    socket.emit('con', 'socket');
});

app.use(cors());
app.use(bodyParser.json());
app.use('/auth', require('./routes/auth'));

app.use('/login', require('./routes/login.js'));
app.use('/signup', require('./routes/signup.js'));
app.use('/auth/friendRequest', require('./routes/friend-request'));
app.use('/auth/acceptRequest', require('./routes/accept-request'));
app.use('/auth/getDetails', require('./routes/get-details'));
app.use('/auth/message', require('./routes/message'));
app.use('/auth/findFriend', require('./routes/find-friend'));


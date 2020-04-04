const mongoose = require('mongoose'), Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
require('dotenv/config');

const UserSchema = new Schema(
    {
        displayName: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        mobileNumber: {
            type: Number,
            required: true
        },
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        friendRequests: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
);

UserSchema.pre('save', function (next) {
    const salt = +process.env.salt;
    this.password = bcrypt.hashSync(this.password, salt);
    next();
});

mongoose.model('User', UserSchema);
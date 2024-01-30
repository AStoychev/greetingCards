const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        minLength: 10,
        require: [true, 'Email is required'],
    },
    username: {
        type: String,
        minLength: 5,
        require: [true, 'Username is required']
    },
    password: {
        type: String,
        require: true,
    },
    resetPasswordCode: {
        type: String,
        maxLength: 6,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

},
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
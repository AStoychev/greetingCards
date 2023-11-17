const bcrypt = require('bcrypt');

const jwt = require('../lib/jsonwebtoken');
const User = require('../models/User');

const SECRET = 'secretisnotverysecretbutissomesecretwemusthave';

exports.login = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid email or password!');
    };

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid email or password!');
    };

    const payload = {
        _id: user._id,
        email: user.email,
        // username: user.username,
    };

    const token = await jwt.sign(payload, SECRET);

    return {
        _id: user._id,
        username: user.username,
        email: user.email,
        admin: user.isAdmin,
        accessToken: token,
    };

    // return token;
}

exports.register = async (username, email, password, repeatPassword) => {
    if (password !== repeatPassword) {
        throw new Error('Password missmatch!');
    }

    const existingUser = await User.findOne({
        email
        // $or: [
        //     { email },
        //     { username },
        // ]
    });

    if (existingUser) {
        throw new Error('User exists!');
    };

    if (password.length < 4) {
        throw new Error('Password too short!');
    };

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ username, email, password: hashedPassword });

    return this.login(email, password);
};

// Change Password not completed

exports.changePassword = async (email, password, newPassword, repeatNewPassword) => {
    const user = await User.findOne({ email });
    const isValid = await bcrypt.compare(password, user.password);

    if (newPassword !== repeatNewPassword) {
        throw new Error('Password missmatch!');
    }

    if (!isValid) {
        throw new Error('Wrong password!');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    await User.findByIdAndUpdate(user._id, { ...user, password: hashedPassword });
}

// Change Password not completed
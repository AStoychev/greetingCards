const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minLength: 2,
        require: [true, 'First name is required!']
    },
    lastName: {
        type: String,
        minLength: 2,
        require: [true, 'Last name is required!']
    },
    email: {
        type: String,
        minLength: 2,
        require: [true, 'Email is required!']
    },
    phoneNumber: {
        type: Number,
        minLength: 2,
        require: [true, 'Phone number is required!']
    },
    shippingCompany: {
        type: String,
        minLength: 2,
        require: [true, 'Shipping company is required!']
    },
    shippingPlace: {
        type: String,
        minLength: 2,
        require: [true, 'Shipping place is required!']
    },
    city: {
        type: String,
        minLength: 2,
        require: [true, 'City is required!']
    },
    postCode: {
        type: Number,
        minLength: 2,
        require: [true, 'Post code is required!']
    },
    address: {
        type: String,
        minLength: 2,
        require: [true, 'Address is required!']
    },
    takeMessage: {
        type: String
    },
    payment: {
        type: String,
        minLength: 2,
        require: [true, 'Payment is required!']
    },
    privacyPolicy: {
        type: String,
        // minLength: 2,
        // require: [true, 'PrivacyPolicy is required!']
    },
    orders: {
        type: Array,
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
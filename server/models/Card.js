const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: 2,
        require: [true, 'Title is required']
    },
    description: {
        type: String,
        minLength: 10,
        require: [true, 'Description is required']
    },
    price: {
        type: Number,
        require: [true, 'Price is required']
    },
    discount: {
        type: Number,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return value.startsWith('http://') || value.startsWith('https://');
            },
            message: 'URL is invalid!'
        }
    },
    // Try save more image
    additionalImage:[{
        type: String,
        required: false,
    }],
    // Try save more image
    inStock: {
        type: Boolean,
        default: true,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    updateFrom: {
        type: String,
        default: '',
        require: false,
    }
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
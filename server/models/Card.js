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
    inStock: {
        type: Boolean,
        default: true,
    }
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
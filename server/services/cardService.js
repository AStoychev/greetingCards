const Card = require('../models/Card');

exports.addCard = async (title, description, price, discount, imageUrl) => {
    const existingCard = await Card.findOne({ title });

    if (existingCard) {
        throw new Error('Card exists!');
    };

    if (title.length < 2) {
        throw new Error('Title too short!');
    };

    if (description.length < 10) {
        throw new Error('Description too short!');
    };

    await Card.create({ title, description, price, discount, imageUrl });
};
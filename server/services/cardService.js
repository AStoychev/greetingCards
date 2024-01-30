const Card = require('../models/Card');

exports.addCard = async (ownerId, cardData) => {
    const existingCard = await Card.findOne({ title: cardData.title });

    if (existingCard) {
        throw new Error('Card exists!');
    };

    if (cardData.title.length < 2) {
        throw new Error('Title too short!');
    };

    if (cardData.description.length < 10) {
        throw new Error('Description too short!');
    };

    await Card.create({ ...cardData, owner: ownerId });
};

exports.getAll = async () => {
    const existingCard = await Card.find({});
    return existingCard
};

exports.getOne = async (cardId) => {
    const existingCard = await Card.findById(cardId);
    return existingCard
};

exports.update = async (cardId, updateId, data) => {
    await Card.findByIdAndUpdate(cardId, {...data, updateFrom: updateId})
};

exports.delete = async (cardId) => {
    const existingCard = await Card.findByIdAndDelete(cardId);
    return existingCard
};
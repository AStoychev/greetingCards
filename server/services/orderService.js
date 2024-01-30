const Order = require('../models/Order');

exports.makeOrder = async (orderData) => {
    await Order.create({ ...orderData })
};

exports.getOne = async (orderId) => {
    const existingOrder = await Order.findById(orderId);
    return existingOrder
};

exports.getAll = async () => {
    const existingOrder = await Order.find({});
    return existingOrder
};

exports.update = async (orderId, updateId, data) => {
    await Order.findByIdAndUpdate(orderId, {...data, updateFrom: updateId})
};
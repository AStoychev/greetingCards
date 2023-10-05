const Order = require('../models/Order');

exports.makeOrder = async (orderData) => {
    await Order.create({ ...orderData })
}

exports.getAll = async () => {
    const existingOrder = await Order.find({});
    return existingOrder
};
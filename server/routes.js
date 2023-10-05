const router = require('express').Router();

const userController = require('./controllers/userController');
const cardController = require('./controllers/cardController');
const orderController = require('./controllers/orderController');

router.use('/users', userController);
router.use('/cards', cardController);
router.use('/orders', orderController);

module.exports = router;
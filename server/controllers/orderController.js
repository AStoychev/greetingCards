const router = require('express').Router();
const orderService = require('../services/orderService');

const sendMail = require('../sendMail/sendMailAfterMakeOrder');

const nodemailer = require('nodemailer');



router.get('/get-all-order', async (req, res) => {
    const result = await orderService.getAll();
    res.json({ ok: result });
});

router.post('/make-order', async (req, res) => {
    const order = req.body;
    try {
        const result = await orderService.makeOrder(order);

        await sendMail.sendMailAfterMakeOrder()

        res.json({ ok: 'true' });

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;

const router = require('express').Router();
const orderService = require('../services/orderService');

const sendMail = require('../sendMail/sendMailAfterMakeOrder');

router.get('/get-all-order', async (req, res) => {
    try {
        const result = await orderService.getAll();
        res.json(result);
    } catch (error) {
        console.log(error)
    }

});

// router.get('/all-orders', async (req, res) => {
//     try {
//         const result = await orderService.getAll();
//         res.json(result);
//     } catch (error) {
//         console.log(error)
//     }

// });

router.post('/make-order', async (req, res) => {
    const order = req.body;

    try {
        const result = await orderService.makeOrder(order);

        if (res.statusCode === 200) {
            await sendMail.sendMailAfterMakeOrder(order)
        }

        res.json({ ok: 'true' });

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;

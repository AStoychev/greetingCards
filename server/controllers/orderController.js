const router = require('express').Router();
const orderService = require('../services/orderService');

const sendMail = require('../sendMail/sendMailAfterMakeOrder');
const sendMailSendOrder = require('../sendMail/sendMailAfterSendOrder');

router.get('/get-all-order', async (req, res) => {
    try {
        const result = await orderService.getAll();
        res.json(result);
    } catch (error) {
        console.log(error)
    }

});

// Get one order for details
router.get('/:orderId', async (req, res) => {
    try {
        const order = req.params.orderId
        const result = await orderService.getOne(order);
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
            await sendMail.sendMailAfterMakeOrder(order);
        }

        res.json({ ok: 'true' });

    } catch (error) {
        console.log(error);
    }
});

//Change status order
router.get('/:orderId/change-status', async (req, res) => {
    const order = req.params.orderId
    const result = await orderService.getOne(order);

    res.json(result);
});

router.put('/:orderId/change-status', async (req, res) => {
    const order = req.body;
    try {
        // req.user._id is information from authMiddlewares and it's give our's information about user id
        const result = await orderService.update(req.params.orderId, req.user._id, order);

        if (order.orderStatus === 'Send') {
            await sendMailSendOrder.sendMailAfterSendOrder(order)
        }

        // It is a good practice to return some metadata( this is data which is created from DB)
        res.json({ ok: 'true' });
        // res.json({ _id: result._id });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;

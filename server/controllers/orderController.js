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

// Send Email For Make Order
// router.post('/email', (req, res) => {
//     let config = {
//         service: 'gmail',
//         auth: {
//             user: 'stoychev.nas@gmail.com',
//             pass: 'rufvsqmvmtpjbors',
//         }
//     }

//     console.log(1111111111111, 'Send Email')

//     let transporter = nodemailer.createTransport(config);

//     let message = {
//         from: 'stoychev.nas@gmail.com',
//         to: 'stoychev.a@abv.bg',
//         subject: 'Your order from GreetingCards Nikolka is send',
//         html: "<b>Hello World</b>"
//     };

//     transporter.sendMail(message).then((info) => {
//         return res.status(201).json(
//             {
//                 msg: "Email sent",
//                 info: info.messageId,
//                 preview: nodemailer.getTestMessageUrl(info)
//             }
//         )
//     }).catch((err) => {
//         return res.status(500).json({ msg: err });
//     }
//     );
// })

module.exports = router;
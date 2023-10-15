const nodemailer = require('nodemailer');
const router = require('express').Router();
const lookForDiscount = require('../serverFunctions/lookForDiscount')

exports.sendMailAfterMakeOrder = async (order) => {
    
    let config = {
        service: 'gmail',
        auth: {
            user: 'stoychev.nas@gmail.com',
            pass: 'rufvsqmvmtpjbors',
        }
    }

    let transporter = nodemailer.createTransport(config);

    let message = {
        from: 'GreetingCards <stoychev.nas@gmail.com>',
        // from: 'stoychev.nas@gmail.com',
        // to: `${order.email}`,
        to: 'stoychev.a@abv.bg',
        subject: `Hi ${order.firstName} ${order.lastName} your order from GreetingCards`,
        html: `<b>Hello</b>
        <div>We have received your order</div>
        <div>Name:<b>${order.firstName} ${order.lastName}</b></div>
        <div>Email:<b>${order.email}</b></div>
        <div>Phone Number:<b>${order.phoneNumber}</b><div>
        <br>
        <div>Information about shipping and payment:</div>
        <div>Shipping Company:<b>${order.shippingCompany}</b></div>
        <div>Shipping Place:<b>${order.shippingPlace}</b><div>
        <div>City:<b>${order.city}</b><div>
        <div>Post Code:<b>${order.postCode}</b><div>
        <div>Address:<b>${order.address}</b><div>
        <br>
        <div>Payment Method:<b>${order.payment}</b><div>
        <br>
        <div>Message:<b>${order.takeMessage}</b><div>
        <br>
        <div>Information about orders:</div>
        ${order.orders.map((x) => (
            `<div>Product Name:<b>${x.title}</b></div>
            <div>Quantity:<b>${x.quantity}</b></div>
            <div>Price:<b>${lookForDiscount.lookForDiscount(x.price, x.discount)}</b></div>
            <div>Total Price For Product: <b>${(x.quantity * (lookForDiscount.lookForDiscount(x.price, x.discount))).toFixed(2)}</b></div>`
        ))}
        <br>
        <div><b>I have accepted the terms of the privacy policy.</b></div>
        <div><b>Total Price: ${order.price}</b></div
        `
    };

    try {
        await transporter.sendMail(message)
        return {
            msg: 'Email sent',
            info: message,
            prewiew: nodemailer.getTestMessageUrl(message),
        }
    }
    catch (error) {
        return { msg: err }
    }



    // await transporter.sendMail(message).then((info) => {
    //     return res.status(201).json(
    //         {
    //             msg: "Email sent",
    //             info: info.messageId,
    //             preview: nodemailer.getTestMessageUrl(info)
    //         }
    //     )
    // }).catch((err) => {
    //     return res.status(500).json({ msg: err });
    // }
    // );
    // })
}


// module.exports = sendMailAfterMakeOrder
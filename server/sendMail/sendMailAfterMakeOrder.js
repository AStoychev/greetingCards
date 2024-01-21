const nodemailer = require('nodemailer');
const router = require('express').Router();
const lookForDiscount = require('../serverFunctions/lookForDiscount');

const USER = process.env.USER;
const SEND_MAIL = process.env.SEND_MAIL;
const SERVICE = process.env.SERVICE;
const TO = process.env.TO;

exports.sendMailAfterMakeOrder = async (order) => {
    
    let config = {
        service: SERVICE,
        auth: {
            user: USER,
            pass: SEND_MAIL,
        }
    }

    let transporter = nodemailer.createTransport(config);

    let message = {
        from: `GreetingCards <${USER}>`,
        to: TO,
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
}
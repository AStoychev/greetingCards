const nodemailer = require('nodemailer');
const router = require('express').Router();
const lookForDiscount = require('../serverFunctions/lookForDiscount')

const bcrypt = require('bcrypt');

const USER = process.env.USER;
const SEND_MAIL = process.env.SEND_MAIL;
const SERVICE = process.env.SERVICE;
const TO = process.env.TO;

exports.SendMailResetPassword = async (email, code) => {

    let hashEmail = '';
    for (let i = 0; i < email.length; i++) {
        hashEmail += `!${email[i].charCodeAt(0)}`
    }
    
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
        subject: `Reset password GreetingCards`,
        html: `<b>Hello</b>
        <div>Hi ${email}</div>
        <div>To reset your password click over this link: <a href=http://localhost:3000/reset-password-step-two/${hashEmail}>Reset Password</a></div>
        <div>Write code</div>
        <div>Your code for change password is:</div>
        <div>Code:<b>${code}</b><div>
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
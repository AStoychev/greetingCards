const router = require('express').Router();
const authService = require('../services/authService');

const sendMail = require('../sendMail/sendMailResetPassword');

router.post('/register', async (req, res) => {
    const { email, username, password, repeatPassword } = req.body;
    try {
        const result = await authService.register(username, email, password, repeatPassword);
        res.json(result);

    } catch (error) {
        console.log(error);
        // res.status(400).render('auth/register', { error: getErrorMessage(error) });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await authService.login(email, password);

        res.json(result);
    } catch (error) {
        console.log(error);
        // res.status(400).render('auth/login', { error: getErrorMessage(error) })
    }
});

router.get('/logout', (req, res) => {
    res.json({ ok: true });
});


// Change Password Functionality not completed

router.post('/change-password', async (req, res) => {
    const { email, password, newPassword, repeatNewPassword } = req.body;
    try {
        const result = await authService.changePassword(email, password, newPassword, repeatNewPassword);
        res.json({ ok: true });
    } catch (error) {
        console.log(error);
    }
});

// Change Password Functionality not completed

// Reset Password
router.post('/reset-password', async (req, res) => {
    const { email } = req.body;
    let code = Math.floor(100000 + Math.random() * 900000);

    try {
        const result = await authService.resetPasswordSendEmail(email, code);
        if (res.statusCode === 200) {
            await sendMail.SendMailResetPassword(email, code);
        }

        res.json({ ok: true });
    } catch (error) {
        console.log(error);
        res.json({ error: "Email doesn't exist!" });
    }
});

router.post('/reset-password-send-code', async (req, res) => {
    const { code, cryptEmail } = req.body;

    try {
        const result = await authService.resetPasswordCompareCode(code, cryptEmail);
        res.json({ ok: 'Valid Code!' });
    } catch (error) {
        console.log(error);
        res.json({ error: "Code isn't valid!" });
    }
});

router.post('/reset-password-change-password', async (req, res) => {
    const { email, newPassword, confirmNewPassword } = req.body;

    try {
        const result = await authService.resetPasswordChangePaswword(email, newPassword, confirmNewPassword);
        res.json({ ok: 'Password Change!' });
    } catch (error) {
        console.log(error);
        res.json({ error: "There is a problem with change password!" });
    }
});
// Reset Password

module.exports = router
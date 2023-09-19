const router = require('express').Router();
const authService = require('../services/authService');

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

module.exports = router
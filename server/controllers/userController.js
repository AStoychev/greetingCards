const router = require('express').Router();
const authService = require('../services/authService');

// Try
// router.get('/register', async (req, res) => {
//     res.send('Hello Register');
//     console.log(11111111111)
// });
// Try

router.post('/register', async (req, res) => {
    // If dont't word remove try catch

    const { email, username, password, repeatPassword} = req.body;
    // const { email, username, password, repeatPassword } = req.body;

    const result = await authService.register(username, email, password, repeatPassword);
    res.json(result);

    // try {
    //     const result = await authService.register(username, email, password);
    //     // const result = await authService.register(username, email, password, repeatPassword);
    //     res.json(result);

    //     // Don't use this
    //     // res.cookie('auth', token);
    // } catch (error) {
    //     res.status(400).render('auth/register', { error: getErrorMessage(error) })
    // }
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    const result = await authService.login(email, password);

    res.json(result);
});

router.get('/logout', (req, res) => {
    res.json({ok: true});
});

module.exports = router
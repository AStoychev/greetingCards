const router = require('express').Router();
const cardService = require('../services/cardService');

router.get('/', (req, res) => {
    // res.send('Hello Card');
    // console.log(111111111111)
    res.json({ ok: true });
});

router.post('/add-card', async (req, res) => {
    const { title, description, price, discount, imageUrl } = req.body;
    try {
        const result = await cardService.addCard(title, description, price, discount, imageUrl);
        res.json(result);

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
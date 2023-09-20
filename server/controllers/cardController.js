const router = require('express').Router();
const cardService = require('../services/cardService');

router.get('/', async (req, res) => {
    const result = await cardService.getAll();
    res.json({ ok: result });
});

// Get all cards
router.get('/all-cards', async (req, res) => {
    try {
        const result = await cardService.getAll();
        res.json(result);
    } catch (error) {
        console.log(error)
    }

});

// Get one card for details
router.get('/:cardId', async (req, res) => {
    const card = req.params.cardId
    const result = await cardService.getOne(card);
    res.json(result);
});

// Create card
router.post('/add-card', async (req, res) => {
    const card = req.body;
    try {
        const result = await cardService.addCard(card);
        // It is a good practice to return some metadata( this is data which is created from DB)
        res.json({ ok: 'true' });
        // res.json({ _id: result._id });
    } catch (error) {
        console.log(error);
    }
});

// Delete one card
router.get('/:cardId/delete', async (req, res) => {
    const card = req.params.cardId;
    try {
        await cardService.delete(card)
        res.json({ok: 'true'});
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
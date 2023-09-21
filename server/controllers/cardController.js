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

// Create card
router.post('/add-card', async (req, res) => {
    const card = req.body;
    try {
        // req.user._id is information from authMiddlewares and it's give our's information about user id
        const result = await cardService.addCard(req.user._id, card);

        // It is a good practice to return some metadata( this is data which is created from DB)
        res.json({ ok: 'true' });
        // res.json({ _id: result._id });
    } catch (error) {
        console.log(error);
    }
});

// Get one card for details
router.get('/:cardId', async (req, res) => {
    const card = req.params.cardId
    const result = await cardService.getOne(card);
    res.json(result);
});

// Get for edit page
router.get('/:cardId/edit', async (req, res) => {
    const card = req.params.cardId
    const result = await cardService.getOne(card);
    res.json(result);
});

router.put('/:cardId/edit', async (req, res) => {
    const card = req.body;
    try {
        // req.user._id is information from authMiddlewares and it's give our's information about user id
        const result = await cardService.update(req.params.cardId, req.user._id, card);

        // It is a good practice to return some metadata( this is data which is created from DB)
        res.json({ ok: 'true' });
        // res.json({ _id: result._id });
    } catch (error) {
        console.log(error);
    }
})

// Delete one card
router.delete('/:cardId/delete', async (req, res) => {
    const card = req.params.cardId;
    try {
        const result = await cardService.delete(card);
        res.json({ok: 'true'});
        // res.json(result);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
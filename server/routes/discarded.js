const express = require('express');
const { Discarded } = require('../models/discarded');

const router = express.Router();

router.get(`/`, async (req, res) => {
    const discardedList = await Discarded.find();

    if (!discardedList) {
        res.status(500).json({ success: false })
    }
    res.status(200).send(discardedList);
});

module.exports = router;
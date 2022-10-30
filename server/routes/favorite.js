const express = require('express');
const { Favorite } = require('../models/favorite');

const router = express.Router();

router.get(`/`, async (req, res) => {
    const favList = await Favorite.find();

    if (!favList) {
        res.status(500).json({ success: false })
    }
    res.status(200).send(favList);
});

module.exports = router;
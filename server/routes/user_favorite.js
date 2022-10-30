const express = require('express');
const { User_Favorite } = require('../models/user_favorite');

const router = express.Router();

router.get(`/`, async (req, res) => {
    const userFavList = await User_Favorite.find();

    if (!userFavList) {
        res.status(500).json({ success: false })
    }
    res.status(200).send(userFavList);
});

module.exports = router;
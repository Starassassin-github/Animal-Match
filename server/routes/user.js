const express = require('express');
const mongo = require('mongodb');
const multer = require('multer');
const { User } = require('../models/user');
const jwt = require('jsonwebtoken');

// MIDDLEWARE
const auth = require('../middleware/auth');

const router = express.Router();

router.get(`/`, async (req, res) => {
    const userList = await User.find();

    if (!userList) {
        res.status(500).json({ success: false })
    }
    res.status(200).send(userList);
});

router.get('/isauth', auth() , async (req, res) => {
    res.send(req.user)
})

router.get(`/favorites/:id`, async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!userList) {
        res.status(500).json({ success: false })
    }
    res.status(200).send(user);
});

router.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username })
    const secret = process.env.SECRET;

    if (!user) {
        return res.status(400).send('The user not found');
    }

    if (user && (req.body.password.localeCompare(user.password) === 0 )) {
        const token = jwt.sign(
            {
                userId: user.id,
                userdata: user
            },
            secret,
            {expiresIn : '7d'}
        )

        res.cookie('x-access-token', token).status(200).send({user: user, token: token})
    } else {
        res.status(400).send({ message: 'password is wrong!' });
    }

})

router.post(`/register`, async (req, res) => {

    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        city: req.body.city,
        image: req.body.image,
        phone: req.body.phone,
        sex: req.body.sex,
        id_card: req.body.id_card,
        birthdate: req.body.birthdate,
        nationality: req.body.nationality,
        education_level: req.body.education_level,
        ability: req.body.ability,
    })

    user = await user.save();

    if (!user)
        return res.status(400).send('the User cannot be created!')

    res.status(200).send(user);
});


router.patch('/favorites/:id/:postid', async (req, res) => {

    const user = await User.findOneAndUpdate(
        {
            _id: req.params.id,
        },
        {
            $push: {
                favorites: req.params.postid
            }
        }
    )

    if (!user)
        return res.status(400).send('the user cannot be created!')

    res.status(200).json({ message: "Post Favorite Added!" })
});

router.patch('/discardeds/:id/:postid', async (req, res) => {

    const user = await User.findOneAndUpdate(
        {
            _id: req.params.id,
        },
        {
            $push: {
                discardeds: req.params.postid
            }
        }
    )

    if (!user)
        return res.status(400).send('the user cannot be created!')

    res.status(200).json({ message: "Post Discarded!" })
});

module.exports = router;
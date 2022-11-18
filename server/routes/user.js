const express = require('express');
const mongo = require('mongodb');
const multer = require('multer');
const jwt = require('jsonwebtoken');

const { User } = require('../models/user');

// MIDDLEWARE
const auth = require('../middleware/auth');

const router = express.Router();

const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('invalid image type');

        if (isValid) {
            uploadError = null;
        }
        cb(uploadError, 'public/uploads');
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(' ').join('-');
        const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${fileName}-${Date.now()}.${extension}`);
    },
});

const uploadOptions = multer({ storage: storage });

router.get(`/`, async (req, res) => {
    const userList = await User.find();

    if (!userList) {
        res.status(500).json({ success: false })
    }
    res.status(200).send(userList);
});

router.get(`/:id`, async (req, res) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        res.status(500).json({ message: 'The user with the given ID was not found.' })
    }
    res.status(200).send(user);
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
        username: req.body.username,
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        image: req.body.image,
        phone: req.body.phone,
        sex: req.body.sex,
        birthdate: req.body.birthdate,
    })

    user = await user.save();

    if (!user)
        return res.status(400).send('the User cannot be created!')

    res.status(200).send(user);
});

router.put('/:id', uploadOptions.single('image'), async (req, res) => {

    const userQuery = await User.findById(req.params.id)
    if (!userQuery) return res.status(400).send('Invalid User')

    const file = req.file;
    let imagepath;

    if (file) {
        const fileName = file.filename;
        const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
        imagepath = `${basePath}${fileName}`
    } else {
        imagepath = userQuery.image;
    }

    const user = await User.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            city: req.body.city,
            image: imagepath,
            phone: req.body.phone,
            sex: req.body.sex,
            id_card: req.body.id_card,
            birthdate: req.body.birthdate,
        },
        { new: true }
    )

    if (!user)
        return res.status(400).send('the user cannot be created!')

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
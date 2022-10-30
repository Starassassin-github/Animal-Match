const express = require('express');
const { Post } = require('../models/post');

const router = express.Router();

router.get(`/`, async (req, res) => {
    const postList = await Post.find();

    if (!postList) {
        res.status(500).json({ success: false })
    }
    res.status(200).send(postList);
});

router.get(`/:id`, async (req, res) => {
    const post = await Post.findById(req.params.id)

    if (!post) {
        res.status(500).json({ message: 'The post with the given ID was not found.' })
    }
    res.status(200).send(post);
})

router.post(`/`, async (req, res) => {

    let post = new Post({
        title: req.body.title,
        age: req.body.age,
        description: req.body.description,
        rich_description: req.body.rich_description,
        images: req.body.images,
        animal_type: req.body.animal_type,
        user_who_post: req.body.user_who_post,
        user_favorite: req.body.user_favorite,
        location: req.body.location,
    })

    post = await post.save();

    if (!post)
        return res.status(400).send('the post cannot be created!')

    res.send(post);
});

router.put('/:id', async (req, res) => {
    const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {
            title: req.body.title,
            age: req.body.age,
            description: req.body.description,
            rich_description: req.body.rich_description,
            images: req.body.images,
            animal_type: req.body.animal_type,
            user_who_post: req.body.user_who_post,
            user_favorite: req.body.user_favorite,
            location: req.body.location,
        },
        { new: true }
    );

    if (!updatedPost)
        return res.status(500).send('the post cannot be updated!');

    res.send(updatedPost);
});


module.exports = router;
const mongoose = require('mongoose');
require('dotenv').config();


const postSchema = mongoose.Schema({
    images: {
        type: Array
    },
    age: {
        type: String,
    },
    description: {
        type:String,
        required:[true,'You need some description'],
        maxLength:200,
    },
    rich_description: {
        type:String,
        maxLength:500,
    },
    user_who_post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user_favorites',
    },
    user_favorite: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user_favorites',
    }],
    animal_type: {
        type: String,
    },
    title: {
        type:String,
        required:true,
    },
    location: {
        type:String,
        required:true,
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('posts', postSchema);
module.exports = { Post };
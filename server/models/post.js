const mongoose = require('mongoose');
require('dotenv').config();


const postSchema = mongoose.Schema({
    image: {
        type:String,
    },
    description: {
        type:String,
        required:[true,'You need some description']
    },
    rich_description: {
        type:String,
        required:[true,'Please add an excerpt'],
        maxLength:500,
    },
    user_who_post: {
        type:String,
        required:true
    },
    user_favorite: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user_favorite',
    },
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

const Post = mongoose.model('post', postSchema);
module.exports = { Post };
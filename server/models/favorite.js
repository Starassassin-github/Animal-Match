const mongoose = require('mongoose');
require('dotenv').config();


const favoriteSchema = mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
    },
    status: {
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const Favorite = mongoose.model('post', favoriteSchema);
module.exports = { Favorite };
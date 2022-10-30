const mongoose = require('mongoose');
require('dotenv').config();


const favoriteSchema = mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts',
    },
    status: {
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const Favorite = mongoose.model('favorites', favoriteSchema);
module.exports = { Favorite };
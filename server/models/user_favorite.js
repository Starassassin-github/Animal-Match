const mongoose = require('mongoose');
require('dotenv').config();


const user_favoriteSchema = mongoose.Schema({
    user_who_favorite: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }],
    date:{
        type: Date,
        default: Date.now
    }
});

const User_Favorite = mongoose.model('post', user_favoriteSchema);
module.exports = { User_Favorite };
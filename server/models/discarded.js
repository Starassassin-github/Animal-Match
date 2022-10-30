const mongoose = require('mongoose');
require('dotenv').config();


const discardedSchema = mongoose.Schema({
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts',
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const Discarded = mongoose.model('discardeds', discardedSchema);
module.exports = { Discarded };
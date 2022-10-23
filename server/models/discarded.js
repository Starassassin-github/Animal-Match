const mongoose = require('mongoose');
require('dotenv').config();


const discardedSchema = mongoose.Schema({
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const Discarded = mongoose.model('post', discardedSchema);
module.exports = { Discarded };
const mongoose = require('mongoose');
const validator = require('validator');
require('dotenv').config();



const userSchema = mongoose.Schema({
    fullname: {
        type:String,
        required:true,
        trim:true,
    },
    email: {
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email')
            }
        }
    },
    password: {
        type:String,
        required:true,
        trim:true,
    },
    city: {
        type:String,
        maxLength:150,
        trim:true
    },
    phone: {
        type:String,
    },
    image: {
        type:String
    },
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts',
    }],
    discarded: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'discardeds'
    },
    favorite: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'favorites'
    }],
    message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'messages'
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('users', userSchema);
module.exports = { User };
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
    passwordHash: {
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
        type:Number,
    },
    image: {
        type:String
    },
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
    }],
    discarded: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'discarded'
    },
    favorite: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'favorite'
    }],
    message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'message'
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);
module.exports = { User };
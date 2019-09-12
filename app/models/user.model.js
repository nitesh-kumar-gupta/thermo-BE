'use strict';
const mongoose = require('mongoose');
const hashHelper = require('./../helpers/hash.helper');
const constant = require('./../../config/constants');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        default: null
    },
    email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    last_login: {
        ip: {
            type: String,
            trim: true,
            default: null
        },
        date: {
            type: Date,
            default: null
        }
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    autoIndex: true
});
userSchema.pre('save', function (next) {
    if (this.isModified('password') || this.isNew)
        this.password = hashHelper.generateHash(this.password);
    return next();
});
userSchema.post('save', function(error, doc, next) {
    if(error.name === 'MongoError' && error.code === 11000) {
        if(error.errmsg.indexOf('email') !== -1)
            next(constant.errors.E_DUPLICATE_EMAIL);
    } else if(error.name === 'ValidationError') {
        next(constant.errors.E_ERROR);
    } else {
        next(error)
    }
});
userSchema.set('toJSON', {
    getters: true, virtuals: false, transform: (doc, ret, options) => {
        delete ret.password;
        delete ret.__v;
        return ret;
    }
});
module.exports = mongoose.model('User', userSchema);
'use strict';
const mongoose = require('mongoose');
const constant = require('./../../config/constants');
const equipmentSchema = mongoose.Schema({
    serial_number: {
        type: String,
        trim: true,
        required: true
    },
    timespan: {
        type: String,
        default: null
    },
    value: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
    autoIndex: true
});

equipmentSchema.set('toJSON', {
    getters: true, virtuals: false, transform: (doc, ret, options) => {
        delete ret.__v;
        return ret;
    }
});
module.exports = mongoose.model('Equipment', equipmentSchema);
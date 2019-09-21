'use strict';
const mongoose = require('mongoose');
const thermoSchema = mongoose.Schema({
    ts: {
        type: Date,
        required: true,
    },
    val: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
    autoIndex: true
});
module.exports = mongoose.model('Thermo', thermoSchema);
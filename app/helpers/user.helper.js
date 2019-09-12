'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');
const userHelper = {
    async getUserById(id) {
        const user = await User.findById(id).lean();
        return user;
    },
    async getUserByEmail(email) {
        const user = await User.findOne({'emails.email': email}).lean();
        return user;
    }
};
module.exports = userHelper;
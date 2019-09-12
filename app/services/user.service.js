'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');
module.exports = class UserService {
    constructor(){}
    async logout(user, connection) {
        await User.findOneAndUpdate({ _id: user.id }, {'last_login.ip': connection.remoteAddress, 'last_login.date': Date.now()});
        return user;
    }
}
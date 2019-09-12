'use strict';
const jwt = require('jsonwebtoken');
const jwtConfig = require('./../../config/middleware/passport/jwt').config;
const jwtHelper = {
    createToken(user, organization = null, role = null) {
        let obj = {
            id: user._id,
            name: user.name,
            email: user.email
        };
        return jwt.sign({ user: obj }, jwtConfig.secret, {
            algorithm: jwtConfig.algorithm,
            expiresIn: jwtConfig.expiresIn,
            issuer: jwtConfig.issuer,
            audience: jwtConfig.audience
        });
    }
};
module.exports = jwtHelper;

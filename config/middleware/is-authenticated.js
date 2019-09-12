'use strict';
const passport = require('passport');
const _ = require('lodash');
const constants = require('./../../config/constants');
const response = require('./../../app/response');
module.exports = (req, res, next) => {
    const token = req.headers['authorization'];
    passport.authenticate('jwt', async (error, user, info) => {
        try {
            if(!token)
                throw constants.errors.E_UNAUTHORIZED;
            else if(error) {
                throw error;
            } else if(!_.isEmpty(info)) {
                if (info.name === 'TokenExpiredError')
                    throw constants.errors.E_SESSION_EXPIRED;
                throw constants.errors.E_UNAUTHORIZED;
            } else {
                req.user = user;
            }
            next();
        }catch(err) {
            return response.error(res, err);
        }
    })(req, res);
};
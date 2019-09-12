'use strict';
const passport = require('passport');
const constants = require('./../../../config/constants');
const response = require('./../../response');
const UserService = require('./../../services/user.service');
const jwtHelper = require('./../../helpers/jwt.helper');
const userHelper = require('./../../helpers/user.helper');
const captchaHelper = require('./../../helpers/captcha.helper');
module.exports = {
    index: async (req, res) => {
        try {
            return response.success(res, constants.success.OK, {message: '#userIndex'});
        } catch(err) {
            return response.error(res, err);
        }
    },
    login: async (req, res) => {
        // try{
        //     await captchaHelper.validateCaptchaV3({captcha: req.body.captchaToken, ip: req.connection.remoteAddress});
        // } catch(err) {
        //     return response.error(res, err);
        // }
        passport.authenticate('local', { session: false }, (err, user) => {
            try {
                if(err)
                    throw err;
                return response.success(res, constants.success.OK, {user: user, token: jwtHelper.createToken(user)});
            }catch(err) {
                return response.error(res, err);
            }
        })(req, res);
    },
    logout: async (req, res) => {
        try {
            const userService = new UserService();
            await userService.logout(req.user, req.connection);
            return response.success(res, constants.success.OK, {success: true});
        } catch(err) {
            console.error('logout err: ', err);
            return response.error(res, err);
        }
    }
};
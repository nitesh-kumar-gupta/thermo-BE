'use strict';
const requestPromise = require('request-promise');
const errorConstants = require('./../../config/constants/error.constant');
const captchaHelper = {
    async validateCaptchaV3(data) {
        const res = await requestPromise({
            method: 'POST',
            uri: 'https://www.google.com/recaptcha/api/siteverify',
            form: {
                secret: process.env.GOOGLE_reCaptchaV3SecretKey,
                response: data.captcha,
                remoteip: data.ip
            }
        });
        if (res.success && res.score >= 0.1)
            return true;
        throw errorConstants.E_UNAUTHORIZED;
    }
};
module.exports = captchaHelper;
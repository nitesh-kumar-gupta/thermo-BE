'use strict';
const cors = require('cors');
const constants = require('./../../config/constants');
const response = require('./../../app/response');
const whitelist = trimArray((process.env.WHITELIST_URLS).split(','));
module.exports = (req, res, next) => {
    cors({
        origin: function (origin) {
            try {
                if (whitelist.indexOf(origin) !== -1)
                    next();
                else
                    throw constants.errors.E_UNAUTHORIZED;
            }catch(err) {
                return response.error(res, err);
            }
        },
        methods: ['OPTIONS', 'GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        allowedHeaders: ['Origin', 'X-Requested-With', 'X-HTTP-Method-Override', 'Content-Type', 'Accept', 'Content-Encoding', 'Authorization'],
        optionsSuccessStatus: 204,
        credentials: true
    })(req, res);
};
function trimArray(arr) {
    for(let i=0;i<arr.length;i++)
        arr[i] = arr[i].replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    return arr;
}

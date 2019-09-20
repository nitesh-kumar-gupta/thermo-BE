'use strict';
const controller = require('../../app/controllers');
const constants = require('./../../config/constants');
const response = require('./../response');
module.exports = (app) => {
    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Credentials', true);
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    });
    app.get('/', controller.index);
    app.use('/api/v1', require('./v1')());
    app.use((req, res) => {
        return response.error(res, constants.errors.E_NOT_FOUND)
    });
};
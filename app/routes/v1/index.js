'use strict';
const express = require('express');
const router = express.Router();
const configRoute = require('./../route.config');
module.exports = function() {
    router.use(function (req, res, next) {
        res._json = res.json;    
        res.json = function (obj) {
            obj.APIversion = 1;
            obj.ip = req.connection.remoteAddress;
            res._json(obj);
        };                     
        next();
    });
    configRoute(router, [
        require('./route')
    ]);
    return router;
};

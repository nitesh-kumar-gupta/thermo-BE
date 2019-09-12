'use strict';
const userController = require('./../../controllers/v1/user.controller');
const isAuthenticated = require('./../../../config/middleware/is-authenticated');
const PRIVATE = [
    { type: 'POST', path: '/auth/login', handlers: [userController.login] },
    { type: 'PUT', path: '/auth/logout', handlers: [isAuthenticated, userController.logout] }
];
const PROTECTED = [];
const PUBLIC = [
    { type: 'GET', path: '/user/index', handlers: [userController.index] }
];
module.exports = {
    PRIVATE,
    PROTECTED,
    PUBLIC
}
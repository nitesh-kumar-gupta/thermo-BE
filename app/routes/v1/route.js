'use strict';
const Controller = require('./../../controllers/v1/controller');
const multer = require('./../../../config/middleware/multer');
const PRIVATE = [];
const PROTECTED = [];
const PUBLIC = [
    { type: 'POST', path: '/file/upload', handlers: [multer.single('file'), Controller.index] }
];
module.exports = {
    PRIVATE,
    PROTECTED,
    PUBLIC
}
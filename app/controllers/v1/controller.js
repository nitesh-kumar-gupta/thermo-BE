'use strict';
const constants = require('./../../../config/constants');
const response = require('./../../response');
const helper = require('./../../helpers/helper');
module.exports = {
    index: async (req, res) => {
        try {
            helper.process(req.file.path);
            return response.success(res, constants.success.OK, {message: '#userIndex'});
        } catch(err) {
            return response.error(res, err);
        }
    }
};
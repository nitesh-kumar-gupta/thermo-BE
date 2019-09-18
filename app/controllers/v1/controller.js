'use strict';
const constants = require('./../../../config/constants');
const response = require('./../../response');
const helper = require('./../../helpers/helper');
module.exports = {
    index: async (req, res) => {
        try {
            let data = await helper.process(req.file.path);
            return response.success(res, constants.success.OK, data);
        } catch(err) {
            return response.error(res, err);
        }
    }
};
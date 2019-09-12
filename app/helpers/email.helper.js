'use strict';
const emailHelper = {
    validateEmail(email) {
        const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        return regex.test(email.toLowerCase());
    }
};
module.exports = emailHelper;
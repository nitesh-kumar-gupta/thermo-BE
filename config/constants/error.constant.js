'use strict';
module.exports = Object.freeze({
    E_SESSION_EXPIRED: {
        code: 400,
        name: 'E_SESSION_EXPIRED',
        message: 'Session expired please re-login.'
    },
    E_ERROR: {
        code: 400,
        name: 'E_ERROR',
        message: 'Something went wrong.'
    },
    E_UNAUTHORIZED: {
        code: 401,
        name: 'E_UNAUTHORIZED',
        message: 'You are unauthorized to access the requested resource'
    },
    E_ACCOUNT_DISABLED: {
        code: 403,
        name: 'E_ACCOUNT_DISABLED',
        message: 'You are unauthorized to access the requested resource'
    },
    E_INVALID_CREDENTIALS: {
        code: 403,
        name: 'E_INVALID_CREDENTIALS',
        message: 'Invalid email or password.'
    },
    E_NOT_FOUND: {
        code: 404,
        name: 'E_NOT_FOUND',
        message: 'Request not found.'
    },
    E_USER_NOT_FOUND: {
        code: 404,
        name: 'E_USER_NOT_FOUND',
        message: 'User not exist.'
    },
    E_DUPLICATE_EMAIL: {
        code: 409,
        name: 'E_DUPLICATE_EMAIL',
        message: 'Email already registered.'
    },
    E_INVALID_EMAIL: {
        code: 420,
        name: 'E_INVALID_EMAIL',
        message: 'Invalid Email.'
    }
});
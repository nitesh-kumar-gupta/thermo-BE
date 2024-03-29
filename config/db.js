'use strict';
const mongoose = require('mongoose');
module.exports = (app, config) => {
    if (app.get('env') === 'development')
        mongoose.set('debug', true);
    let options = {
        keepAlive: 300000,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    };
    mongoose.connect(config.db, options, (err) => {
        if(err)
            console.info('MongoDB connect Error:', err);
    });
    mongoose.connection.on('connected', function () {
        console.info('Mongoose default connection open to ' + config.db);
    });
    mongoose.connection.once('open', () => {
        console.info('Connected to mongodb!');
    });
    mongoose.connection.on('error', function (err) {
        console.error('Mongoose default connection error: ' + err);
    });

    mongoose.connection.on('disconnected', function () {
        console.info('Mongoose default connection disconnected');
    });
    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.info('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });
};

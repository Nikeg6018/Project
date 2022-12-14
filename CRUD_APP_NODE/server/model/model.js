const mongoose = require('mongoose');

var Schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
});

const UserDB = mongoose.model('userdb', Schema);

module.exports = UserDB;
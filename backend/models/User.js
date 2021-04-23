const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    creadtedAt: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
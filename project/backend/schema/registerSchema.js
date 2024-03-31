const mongoose = require('mongoose');
const { Schema } = mongoose;

const registerSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    email: {
        type: String,
        nullable: true,
        unique: true,
    },
    mobile: {
        type: String,
        nullable: true,
        unique: true,
    },
    image: {
        type: String,
        nullable: true,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 60
    },
});

module.exports = registerSchema;
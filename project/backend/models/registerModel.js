const mongoose = require('mongoose');
const registerSchema = require('../schema/registerSchema');
const Register = mongoose.model('User', registerSchema);


module.exports = Register;




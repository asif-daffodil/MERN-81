const express = require('express');
const Router = express.Router();
const formValidation = require('../middleware/formValidation');
const Register = require('../models/registerModel');


Router.post("/register", formValidation, async (req, res) => {
    try {
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let emailOrMobile = req.body.emailOrMobile;
        let password = req.body.confirmPassword;
        let birthday = req.body.birthday;
        let email = "";
        let mobile = "";

        // check if emailOrMobile is email or mobile
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^[0-9]{9,15}$/;
        if (emailRegex.test(emailOrMobile)) {
            email = emailOrMobile;
        } else if (mobileRegex.test(emailOrMobile)) {
            mobile = emailOrMobile;
        } else {
            return res.status(400).send("Invalid email or mobile");
        }

        let existingUser;
        if (email) {
            existingUser = await Register.findOne({ email: email });
            if (existingUser) {
                return res.status(400).send("Email already exists");
            }
        } else if (mobile) {
            existingUser = await Register.findOne({ mobile: mobile });
            if (existingUser) {
                return res.status(400).send("Mobile already exists");
            }
        }

        let newUser = new Register({
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobile: mobile,
            password: password,
            birthday: birthday
        });

        const savedUser = await newUser.save();
        res.status(201).send(savedUser);
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports = Router;
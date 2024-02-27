const registerValidation = (req, res, next) => {
    //first name, last name, mobile or email, password, birthday
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let emailOrMobile = req.body.emailOrMobile;
    let password = req.body.password;
    let birthday = req.body.birthday;

    if (firstName && lastName && emailOrMobile && password && birthday) {
        next();
    } else {
        res.status(400).send("Invalid input");
    }
}

module.exports = registerValidation;
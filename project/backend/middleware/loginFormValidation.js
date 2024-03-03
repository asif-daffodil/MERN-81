const loginFormValidation = (req, res, next) => {
    let emailOrMobile = req.body.emailOrMobile;
    let password = req.body.password;

    if (emailOrMobile && password) {
        next();
    } else {
        res.status(400).send("Invalid input");
    }
}

module.exports = loginFormValidation;
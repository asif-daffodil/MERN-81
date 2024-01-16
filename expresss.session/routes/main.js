const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if (!req.session.fname || !req.session.lname) {
        res.redirect('/login');
    }else{
        res.render('home', { fname: req.session.fname, lname: req.session.lname });
    }
});

router.get('/login', (req, res) => {
    if (!req.session.fname || !req.session.lname) {
        res.render('login', { errMsg: '' });
    }else{
        res.redirect('/');
    }
});

router.post('/login', (req, res) => {
    if(req.body.uname === 'admin' && req.body.pass === '123456'){
        req.session.fname = "Mr";
        req.session.lname = "Admin";
        res.redirect('/');
    }else{
        res.render('login', { errMsg: 'Invalid username or password' });
    }
});

// logout
router.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

// page not found
router.get('/*', (req, res) => {
    res.render('pageNotFound');
});


module.exports = router;
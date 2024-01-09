// tausifRouter.js
const express = require('express');
const router = express.Router();

// express-validator
const { check, validationResult } = require('express-validator');

const tauArr = ["Akash"];

router.get('/tausifa', (req, res) => {
    res.render('tau/tausif', { errors: ''});
});

router.post('/taufrm', [
    check('sname').isLength({ min: 1 }).withMessage('Please enter a name').matches(/^[A-Za-z. ]*$/).withMessage('Invalid name'),
    check('sage').isNumeric().withMessage('Please enter a age')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // return res.status(422).json({ errors: errors.array() });
        res.render('tau/tausif', { errors: errors.mapped() });
    } else {
        tauArr.unshift(req.body.sname);
        res.redirect('back');
    }
});


router.delete('/taudel', (req, res) => {
    console.log('DELETE route reached');
    // Handle delete logic here
    res.send('delete');
});

router.delete('/taudel/:id', (req, res) => {
    tauArr.length = 0;
    res.redirect('/tausif/tausifa');
});


module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello Api!');
});

router.get('/tata', (req, res) => {
    res.send('Hello tata!');
});

router.get('/golam/:id-:city', (req, res) => {
    res.send('The id you specified is ' + req.params.id + ' and city is ' + req.params.city);
});

router.get('/tausif', (req, res) => {

});

module.exports = router;
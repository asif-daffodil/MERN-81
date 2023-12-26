const express = require('express');
const app = express();
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
const router = express.Router();

const tauArr = ["Akash"];

router.get('/tausifa', (req, res) => {
    res.render('tau/tausif', {names: tauArr});
});

router.post('/taufrm', (req, res) => {
    tauArr.unshift(req.body.sname);
    res.redirect('/tausif/tausifa');
});


router.delete('taudel', (req, res) => {
    tauArr.length = 0;
    res.redirect('/tausif/tausifa');
});

module.exports = router;
const express = require('express');
const app = express();
const port = 4000;
const methodOverride = require('method-override');
const { check, validationResult } = require('express-validator');

app.use(methodOverride('_method'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true  }));

app.use(express.static('public'));


const router = require('./routes/router');
const tausiRouter = require('./routes/tausifRouter');
const fileRouter = require('./routes/fileRouter');

app.use('/api', router);
app.use('/tausif', tausiRouter);
app.use('/file', fileRouter);


// implement ejs
app.set('view engine', 'ejs');


app.listen(port, () => {
    console.log('Example app listening on port 4000!');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/api', (req, res) => {
    res.send('Hello Api!');
});

//  all
app.all('/secret', (req, res) => {
    console.log('Accessing the secret section ...');
    res.send('Hello Secret!');
});

app.get('/golam/:id-:city', (req, res) => {
    res.send('The id you specified is ' + req.params.id + ' and city is ' + req.params.city);
});

app.get('/ashraful', (req, res) => {
    res.send(req.query.age + ' ' + req.query.city);
});

app.get('/akash', (req, res) => {
    const data = { 
        name: 'Akash', 
        id: 1, 
        age: 14 
    }
    res.json(data);
});

app.get('/about/:city?', (req, res) => {
    req.params.city ? res.send(req.params.city) : res.send('No City');
});

app.get('/dipti/:id?', (req, res, next) => {
    console.log("Hello Dipti!");
    next();
}, (req, res) => {
    console.log("Hello Dipti Again!");
    req.params.id ? res.send(req.params.id) : res.send('No Id');
});

const isLogin = true;

const authCheck = (req, res, next) => {
    if (isLogin) {
        next();
    } else {
        // not authorized
        res.status(401).send('You are not authorized');
    }
};

app.get('/profile', authCheck, (req, res) => {
    res.status(200).send('You are authorized');
});

// sendFile akash.html
app.get('/akashi', (req, res) => {
    res.sendFile(__dirname + '/akash.html');
});



app.get('/akashii', (req, res) => {
    res.render('home', { });
});

app.delete('/ppi', (req, res) => {
    res.send('Hello Api!');
});

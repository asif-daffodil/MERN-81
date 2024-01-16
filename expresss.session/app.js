const express = require('express');
const app = express();
const port = 4000;
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

const mainRoutes = require('./routes/main');

app.use('/', mainRoutes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
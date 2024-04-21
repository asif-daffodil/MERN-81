const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/taga', { useNewUrlParser: true, useUnifiedTopology: true });

const port = 4000;
const api = require('./routes/api');
app.use('/api', api);

const post = require('./routes/post');
app.use('/post', post);

app.get('/', (req, res) =>
    res.send('Hello World!')
    );

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
});
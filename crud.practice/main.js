const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const mongoose = require('mongoose');
const conn = async () => {
    await mongoose.connect('mongodb://localhost:27017/preactice81');
};
conn();

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    address: String,
    phone: String,
    email: String,
});

const Student = mongoose.model('students', studentSchema);

app.post('/addStudent', async (req, res) => {
    try {
        const student = new Student();
        student.name = req.body.name;
        student.age = req.body.age;
        student.address = req.body.address;
        student.phone = req.body.phone;
        student.email = req.body.email;
        await student.save();
        res.send(student);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

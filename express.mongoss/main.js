const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/mern81');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

main();

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  country: String,
});

const mernSchema = new Schema({
  name: String,
  area: String,
  gender: String
});

const User = mongoose.model('User', userSchema);
const mernModel = mongoose.model('mernStudent', mernSchema);

app.post('/api/users', async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      country: req.body.country,
    });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/mern', async (req, res) => {
    try{
        const mernUser = new mernModel({
            name: req.body.name,
            area: req.body.area,
            gender: req.body.gender
        });
        await mernUser.save();
        res.status(201).json(mernUser);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
    });

app.get('/api/mernuser', async(req, res) => {
    try{
        const mernUser = await mernModel.find();
        res.status(200).json(mernUser);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.put('/api/mernuser/:id', async (req, res) => {
    try{
        const upuser =  await mernModel.findByIdAndUpdate(req.params.id, {gender: "Male"});
        res.status(200).json(upuser);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete('/api/mernuser/:id', async (req, res) => {
    try{
        const deluser = await mernModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deluser);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

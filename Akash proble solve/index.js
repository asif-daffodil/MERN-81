import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const port = 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

/* const User = mongoose.model('User', {
    name: {
        type: String,  
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}); */

// creating endpoint for registering user

app.post('/signup', async (req, res) => {
    /* let check = await User.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({success: false, errors: "Email already exists"});
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    } */
    // const user = new User({
    //     name: req.body.username,
    //     email: req.body.email,
    //     password: req.body.password,
    //     cartData: cart,
    // })
    // await user.save();
    // const data = {
    //     user: {
    //         id: user.id
    //     }
    // }
    // const token = jwt.sign(data, 'secret_ecom');
    // res.json({ success: true, token });

    const akashRes = {
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }

    res.json({ success: true, data: akashRes });
});

// creating endpoint for login user

/* app.post('/login', async (req, res) => {
    let user = await User.findOne({
        email: req.body.email});
    if (user) {
        const passMatch = req.body.password === user.password;
        if (passMatch) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
        } else {
            res.json({ success: false, errors: "Invalid password" });
        }
    } else {
        res.json({ success: false, errors: "Invalid email" });
    }
    
}); */
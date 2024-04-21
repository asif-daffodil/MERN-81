const express = require('express');
const Router = express.Router();
const PostModel = require('../models/postModel');

// field userPost, user_id
Router.post('/create', async (req, res) => {
    try {
        let userPost = req.body.userPost;
        let user_id = req.body.user_id;

        let post = new PostModel({
            userPost: userPost,
            user_id: user_id
        });

        await post.save();
        const success = {
            data: post,
            message: "Post created successfully"
        } 

        res.status(200).send(success);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


module.exports = Router;
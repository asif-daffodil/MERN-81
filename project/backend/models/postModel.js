const mongoose = require('mongoose');
const postSchema = require('../schema/postSchema');
const PostModel = mongoose.model('Post', postSchema);


module.exports = PostModel;
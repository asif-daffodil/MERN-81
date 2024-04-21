const mongoose = require('mongoose');
const { Schema } = mongoose;


const postSchema = new Schema({
    userPost: {
        type: String,
        required: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
});

module.exports = postSchema;
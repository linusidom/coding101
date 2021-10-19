const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema(
    {
        comment:{
            type: String,
            required: false,
            unique: false
        }
    },
    {
        timestamps: true
    }
)

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: false,
            unique: false
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            unique: false,
            ref: 'User'
        },
        comments :[commentSchema]
    },
    {
        timestamps: true
    }
)

const Post = new mongoose.model("Post", postSchema)

module.exports = Post
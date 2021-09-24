const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: false,
            unique: false
        }
    },
    {
        timestamps: true
    }
)

// const schemaLess = new mongoose.Schema({}, {strict: false})

const Post = new mongoose.model('Post', postSchema)

module.exports = Post
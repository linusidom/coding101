const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({},{timestamps:true, strict:false})

const postSchema = mongoose.Schema({
    comments:[commentSchema]
}, {timestamps:true, strict:false})

const Post = mongoose.model('post', postSchema)

module.exports = Post
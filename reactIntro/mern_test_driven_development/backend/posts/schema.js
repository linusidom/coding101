const mongoose = require('mongoose')

const postSchema = mongoose.Schema({}, {timestamps:true, strict: false})

const Post = mongoose.model('post', postSchema)

module.exports = Post
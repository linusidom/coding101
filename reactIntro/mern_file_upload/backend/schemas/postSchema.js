const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({}, {timestamps: true, strict: false})

const postSchema = mongoose.Schema({ images: [imageSchema]}, {timestamps: true, strict: false})

const Post = mongoose.model('post', postSchema)

module.exports = Post
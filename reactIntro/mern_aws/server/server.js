const express = require('express')
const app = express()

const mongoose = require('mongoose')
const postSchema = mongoose.Schema({},{timestamps:true, strict:false})
const Post = mongoose.model('post', postSchema)
const path = require('path')
// var cors = require('cors')

app.use(express.json())

// app.use(cors())
// Making Build Folder as Public 


app.use(express.static(path.join(__dirname, '../../client/deploy')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/deploy', 'index.html'));
});


app.get('/posts', (req, res) => {
    res.status(200).json({message:'Success!'})
})

app.get('/posts/list', async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

module.exports = app
const Post = require('./schema')

// This example is not using Test Driven development
// We are building out postListView first
const postListView = async (req, res) => {
    
    try {
        
        const posts = await Post.find()
        res.status(200).json(posts)

    } catch (error) {
        res.status(200).json({error:error.message})
    }
}

const postCreateView = async (req, res) => {
    try {
        const post = await Post.create(req.body)
        res.status(201).json(post)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}

const postDetailView = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID)
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}

const postUpdateView = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.postID, {...req.body}, {new:true})
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}

const postDeleteView = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.postID)
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}

module.exports = { postListView, postCreateView, postDetailView, postUpdateView, postDeleteView}
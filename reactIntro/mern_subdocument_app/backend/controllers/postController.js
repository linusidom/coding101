const mongoose = require('mongoose')
const Post = require('../schemas/postSchema')
// Basic view to ensure things are working
// const postCheckView = (req, res) => {
//     res.json({message:'Connected to the Post Controller'})
// }


// Post Create View
const postCreateView = async (req, res) => {

    try {

        const posts = await Post.create(req.body)
        res.status(200).json(posts)    

    } catch (error) {
        res.status(400).json({message:error.message})
    }
    
}


const postListView = async (req, res) => {
    try {

        const posts = await Post.find()
        res.status(200).json(posts)    

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}



const postDetailView = async (req, res) => {
    try {

        const post = await Post.findById(req.params.postID)
        if(post) {
            res.status(200).json(post)    
        } else {
            res.status(404).json({message:'Post Not Found'})    
        }
        

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const postDeleteView = async (req, res) => {
    try {

        const post = await Post.findByIdAndDelete(req.params.postID)
        if(post) {
            res.status(200).json(post)    
        } else {
            res.status(404).json({message:'Post Not Found'})    
        }
        

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const commentCreateView = async (req, res) => {


    try {

        const post = await Post.findByIdAndUpdate(req.params.postID, {$push: { comments: req.body}}, {new: true, upsert:true})
        if(post) {
            res.status(200).json(post)    
        } else {
            res.status(404).json({message:'Post Not Found'})    
        }
        


    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const commentDeleteView = async (req, res) => {


    try {

        const post = await Post.findByIdAndUpdate(req.params.postID, {$pull: { comments: {_id: req.params.commentID}}}, {new: true, upsert:true})
        if(post) {
            res.status(200).json(post)    
        } else {
            res.status(404).json({message:'Post Not Found'})    
        }
        


    } catch (error) {
        res.status(400).json({message:error.message})
    }
}



module.exports = { postCreateView, postListView, postDetailView, postDeleteView, commentCreateView, commentDeleteView }
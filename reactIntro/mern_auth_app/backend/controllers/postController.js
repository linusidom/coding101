const Post = require('../schemas/postSchema')

const postListView = async (req, res) => {

    try {
        const posts = await Post.find()
        if(posts){
            res.status(200).json(posts)
        } else {
            res.status(404).json({message:'Post Not Found'})
        }
            
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const postCreateView = async (req, res) => {

    try {
        const post = await Post.create(req.body)

        if(post){
            res.status(200).json(post)
        } else {
            res.status(404).json({message:'Post Not Found'})
        }
            
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const postDetailView = async (req, res) => {

    try {
        
        const post = await Post.findById(req.params.id)
        if(post){
            res.status(200).json(post)
        } else {
            res.status(404).json({message:'Post Not Found'})
        }
            
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const postUpdateView = async (req, res) => {

    try {
        
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true, upsert:true})
        if(post){
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

        const post = await Post.findByIdAndDelete(req.params.id)
        if(post){
            res.status(200).json(post)
        } else {
            res.status(404).json({message:'Post Not Found'})
        }
            
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}




// Comments
const commentCreateView = async (req, res) => {

    try {
        
        const post = await Post.findByIdAndUpdate(req.params.id, {$push: {comments: req.body}}, {new:true})
        if(post){
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
        
        const post = await Post.findByIdAndUpdate(req.params.postID, {$pull: {comments: {_id: req.params.commentID}}}, {new:true})
        if(post){
            res.status(200).json(post)
        } else {
            res.status(404).json({message:'Post Not Found'})
        }
            
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


module.exports = {postListView, postCreateView, postDetailView, postUpdateView, postDeleteView, commentCreateView, commentDeleteView}
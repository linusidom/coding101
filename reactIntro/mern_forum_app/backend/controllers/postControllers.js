const Post = require('../schemas/postSchema')


const postListView = async (req, res) => {
    try {
        
        const posts = await Post.find()

        res.status(200).json(posts)

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const postCreateView = async (req, res) => {
    try {
        
        const postExists = await Post.findOne({title:req.body.title})
        if(postExists){
            res.status(403).json({message:'Title already exists'})
        } else {
            const post = await Post.create({title: req.body.title, content: req.body.content, user: req.user._id, username:req.user.username})
            if(post){
                res.status(201).json(post)
            } else {
                res.status(403).json({message:'There was a problem with this post'})
            }
        }


    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const postDetailView = async (req, res) => {
    try {
        
        const post = await Post.findById(req.params.postID)
        if(post){
            res.status(200).json(post)
        } else{
            res.status(404).json({message:'Post not found'})
        }


    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const postUpdateView = async (req, res) => {
    try {
        
        // ID of the Post
        const post = await Post.findById(req.params.postID)
        if(post.user.equals(req.user._id)){
            const updatedPost = await Post.findByIdAndUpdate(req.params.postID, req.body, {new:true})
            if(updatedPost){
                res.status(200).json(updatedPost)
            } else {
                res.status(400).json({message:'There was a problem updating the post'})
            }
        } else {
            res.status(403).json({message:'Only the owner of the post can update this post'})
        }
        // if the owner of the post matches the requestor of the post
        // else return an error saying only the owner can update the post

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const postDeleteView = async (req, res) => {
    try {
        
        // ID of the Post
        const post = await Post.findById(req.params.postID)
        if(post.user.equals(req.user._id)){
            const deletedPost = await Post.findByIdAndDelete(req.params.postID)
            if(deletedPost){
                res.status(200).json(deletedPost)
            } else {
                res.status(400).json({message:'There was a problem deleting the post'})
            }
        } else {
            res.status(403).json({message:'Only the owner of the post can delete this post'})
        }
        // if the owner of the post matches the requestor of the post
        // else return an error saying only the owner can update the post

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


// Comments Section
const commentCreateView = async (req, res) => {
    try {
        
        const post = await Post.findByIdAndUpdate(req.params.postID, {$push: {comments: {comment: req.body.comment, user: req.user._id, username: req.user.username}}}, {new: true})
        if(post) {
            res.status(200).json(post)
        } else {
            res.status(400).json({message:'There was a problem adding the comment'})
        }

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const commentDeleteView = async (req, res) => {
    try {
        
        // Can this use delete this comment or not?
        
        const post = await Post.findById(req.params.postID)
        console.log(post)
        if(post){
            if(post.user.equals(req.user._id)){

                const deleteComment = await Post.findByIdAndUpdate(req.params.postID, {$pull: {comments: {_id: req.params.commentID}}}, {new: true})
                console.log('delete comment',deleteComment)
                if(deleteComment){
                    res.status(200).json(deleteComment)
                } else {
                    res.status(400).json({message:'There was an issue deleting the comment'})
                }
            } else {
                res.status(403).json({message:'You do not have sufficient priveleges to delete the comment'})
            }
        } else {
            res.status(404).json({message:'Comment not found'})
        }

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}







module.exports = {postListView, postCreateView, postDetailView, postUpdateView, postDeleteView, commentCreateView, commentDeleteView}
const Post = require('../schemas/postSchemas')

const postTestView = async (req, res) => {
    res.status(200).json({message:'Post Test View'})
}


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
        
        const post = await Post.create({user:req.user._id, username:req.user.username ,title:req.body.title, content:req.body.content})
        if(post){
            res.status(201).json(post)
        } else {
            res.status(400).json({message:'There was a problem creating the post'})
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
            res.status(404).json({message:'Post not found'})
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const postUpdateView = async (req, res) => {
    try {

        const postOwner = await Post.findById(req.params.id)
        if(postOwner.user.equals(req.user._id)){
            const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true, upsert:true})
            if(post){
                res.status(200).json(post)
            } else {
                res.status(404).json({message:'Post not found'})
            }
        } else {
            res.status(403).json({message:'You do not have sufficient priveleges for this operation'})
        }

        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const postDeleteView = async (req, res) => {
    try {
        const postOwner = await Post.findById(req.params.id)
        if(postOwner.user.equals(req.user._id)){

            const post = await Post.findByIdAndDelete(req.params.id)
            if(post){
                res.status(200).json(post)
            } else {
                res.status(404).json({message:'Post not found'})
            }
        } else {
            res.status(403).json({message:'You do not have sufficient priveleges for this operation'})
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const commentCreateView = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.postID, {$push: {comments: req.body}}, {new: true})
        if(post){
            res.status(200).json(post)
        } else {
            res.status(404).json({message:'Post not found'})
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const commentDeleteView = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.postID, {$pull: {comments: {_id: req.params.commentID}}}, {new: true})
        if(post){
            res.status(200).json(post)
        } else {
            res.status(404).json({message:'Post not found'})
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
module.exports = {postTestView, postListView, postCreateView, postDetailView, postUpdateView, postDeleteView, commentCreateView, commentDeleteView}
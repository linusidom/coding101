const Post = require('../schemas/postSchemas')

const postTestGet = async (req, res) => {

    res.status(200).json({message:'Connected to GET request Properly'})

}


const postCreateView = async (req, res) => {


    try {
        
        const post = await Post.create(req.body)
        res.status(201).json(post)

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

const postDeleteView = async (req, res) => {
    try {
        
        const post = await Post.findByIdAndDelete(req.params.id)
        if(post){
            res.status(200).json(post)
        } else{
            res.status(404).json({message:'Post Not Found'})
        }



    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const postUpdateView = async (req, res) => {
    // if the following comes out "undefined" - check your app.use(express.json()) in server.js
    console.log(req.body)

    try {
        
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(post){
            res.status(200).json(post)
        } else{
            res.status(404).json({message:'Post Not Found'})
        }


    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


module.exports = {postTestGet, postCreateView, postListView, postDeleteView, postUpdateView}
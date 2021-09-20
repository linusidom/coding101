const {Post, UnstructuredData} = require("../schemas/postSchema")


const postListView = async (req, res) => {
    // res.json({message:'Get Request from Controller'})
   
    try {

        const posts = await Post.find()
        res.status(200).json(posts)    
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    
}

const postCreateView = async (req, res) => {

    // console.log('Request Body',req.body)

    try {

        // This is just an example
        const unstructData = await UnstructuredData.create(req.body)


        const post = await Post.create(req.body)
        res.status(201).json(post)    
    } catch (error) {
        res.status(400).json({message:error.message})
    }

    
}


const postDetailView = async (req, res) => {

    // console.log(req.params)
    // res.json({message:'Detail View'})

    try {
        const post = await Post.findById(req.params.id)
        if (post) {
            res.status(200).json(post)        
        } else {
            res.status(200).json({message:'No Post with that ID'})
        }
        
    } catch (error) {
        res.status(400).json({message:'ID of the request has the incorrect format, please check the ID again'})
    }
}

const postUpdateView = async (req, res) => {

    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if (post) {
            res.status(200).json(post)        
        } else {
            res.status(200).json({message:'No Post with that ID'})
        }
        
    } catch (error) {
        res.status(400).json({message:'ID of the request has the incorrect format, please check the ID again'})
    }
}

const postDeleteView = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        if (post) {
            res.status(200).json(post)        
        } else {
            res.status(200).json({message:'No Post with that ID'})
        }
        
    } catch (error) {
        res.status(400).json({message:'ID of the request has the incorrect format, please check the ID again'})
    }
}


module.exports = {postListView, postCreateView, postDetailView, postUpdateView, postDeleteView}
const Post = require("../schemas/postSchema")



const postListView = async (req, res) => {
    // res.json({message:'Connected to Post List View'})
    
    try {
        const posts = await Post.find() 
        res.status(200).json(posts)   
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    

}

module.exports = {postListView}
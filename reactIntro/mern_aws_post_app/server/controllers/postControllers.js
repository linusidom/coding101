const Post = require('../schemas/postSchema')

const {upload, uploadMultiple, uploadPDF} = require('../middleware/uploads')

const postListView = async (req, res) => {
    // res.status(200).json({message: 'Success!!'})

    try {
        
        const posts = await Post.find()
        res.status(200).json(posts)

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const postCreateView = async (req, res) => {
    // res.status(200).json({message: 'Success!!'})

    upload( req, res, async (err) => {
        if(err) {
            res.status(400).json({message:err.message})
        } else {
            try {
                // console.log(req.body, req.file)
                const post = await Post.create({title: req.body.title, content: req.body.content, image: `/uploads/${req.file.filename}`})
                res.status(200).json(post)
        
            } catch (error) {
                res.status(400).json({message:error.message})
            }
        }
    })
}



const postDeleteView = async (req, res) => {
    // res.status(200).json({message: 'Success!!'})

    try {
        const post = await Post.findByIdAndDelete(req.params.postID)
        res.status(200).json(post)

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

module.exports = {postListView, postCreateView, postDeleteView}
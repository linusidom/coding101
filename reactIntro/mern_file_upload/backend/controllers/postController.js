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


const postCreateOneView = async (req, res) => {
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

const postCreateMultipleView = async (req, res) => {
    // res.status(200).json({message: 'Success!!'})

    uploadMultiple( req, res, async (err) => {
        console.log('Multiple Upload',req.files)
        if(err) {
            res.status(400).json({message:err.message})
        } else {
            try {
                // console.log(req.body, req.file)
                const post = await Post.create({title: req.body.title, content: req.body.content})
                for(let i = 0 ; i < req.files.length; i++){
                    await post.images.push({image: `/uploads/${req.files[i].filename}`})
                    await post.save()
                }
                res.status(200).json(post)
        
            } catch (error) {
                res.status(400).json({message:error.message})
            }
        }
    })
}





const postCreatePDFView = async (req, res) => {
    // res.status(200).json({message: 'Success!!'})

    uploadPDF( req, res, async (err) => {
        console.log('PDF Upload',req.file)
        if(err) {
            res.status(400).json({message:err.message})
        } else if(req.error){

            res.status(400).json({message:req.error.message})

        } else {
            try {
                // console.log(req.body, req.file)
                const post = await Post.create({title: req.body.title, content: req.body.content, pdfFile: `/uploads/${req.file.filename}`})
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

module.exports = {postListView, postCreateOneView, postCreateMultipleView, postCreatePDFView, postDeleteView}
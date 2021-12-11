const Course = require('../schemas/courseSchema')

const {upload} = require('../middleware/uploads')

const courseListView = async (req, res) => {
    // res.status(200).json({message: 'Success!!'})

    try {
        
        const courses = await Course.find()
        res.status(200).json(courses)

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const courseCreateView = async (req, res) => {
    // res.status(200).json({message: 'Success!!'})

    upload( req, res, async (err) => {
        if(err) {
            res.status(400).json({message:err.message})
        } else {
            try {
                // console.log(req.body, req.file)

                const course = await Course.create({...req.body, price: parseInt(req.body.price), image: `/uploads/${req.file.filename}`, user:req.user._id, username: req.user.username})
                res.status(200).json(course)
        
            } catch (error) {
                res.status(400).json({message:error.message})
            }
        }
    })
}

const courseDetailView = async (req, res) => {
    // res.status(200).json({message: 'Success!!'})

    try {
        
        const course = await Course.findById(req.params.courseID)
        
        if(course){
            res.status(200).json(course)    
        } else {
            res.status(404).json({message:'Course Not Found'})
        } 

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const courseUpdateView = async (req, res) => {
    // res.status(200).json({message: 'Success!!'})

    upload( req, res, async (err) => {
        if(err) {
            res.status(400).json({message:err.message})
        } else {
            try {
                // console.log(req.body, req.file)

                const course = await Course.findByIdAndUpdate(req.params.courseID, {title: req.body.title, content: req.body.content, image: `/uploads/${req.file.filename}`}, {new: true})
                if(course){
                    res.status(200).json(course)    
                } else {
                    res.status(404).json({message:'Course Not Found'})
                } 
                
        
            } catch (error) {
                res.status(400).json({message:error.message})
            }
        }
    })
}

const courseDeleteView = async (req, res) => {
    // res.status(200).json({message: 'Success!!'})

    try {
        const course = await Course.findByIdAndDelete(req.params.courseID)
        if(course){
            res.status(200).json(course)    
        } else {
            res.status(404).json({message:'Course Not Found'})
        } 

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

module.exports = {courseListView, courseCreateView, courseDetailView, courseUpdateView, courseDeleteView}
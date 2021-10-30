const User = require('../schemas/userSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userTestView = (req, res) => {
    res.status(200).json({message:'Reached the controller successfully!'})
}

const userRegisterView = async (req, res) => {
    try {
        // We will get data from req.body
        // {
        //     username:asdf,
        //     email:asdf@asdf.com,
        //     password: asdf
        // }
        // Check if the user exists already...req.body.username

        const userExists = await User.findOne({
            $or: [
                {email:req.body.email},
                {username:req.body.username}
            ]    
        })
        // const userExists = await User.findOne({username:req.body.username})
        // if the user exists, send an error message
        // else create the user
        // if there was a problem creating the user, send error message

        if(userExists){
            res.status(403).json({message:'Sorry but the Username / Email are already exists, pick a new one'})
        } else {

            const encryptedPassword = await bcrypt.hash(req.body.password, 10)

            const user = await User.create({username: req.body.username, password: encryptedPassword, email: req.body.email})
            if(user){
                res.status(201).json(user)
            } else {
                res.status(400).json({message:'There was a problem creating the user, please try again later'})
            }
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const userLoginView = async (req, res) => {
    try {
        
        // Check if the user exists
        const user = await User.findOne({email:req.body.email})



        // if the user exists, check if the passwords match
            // If the passwords match return the user
            // else passwords do not match send and error
        // else user does not exist, send an error

        if(user){
            
            const comapredPassword = await bcrypt.compare(req.body.password, user.password)
            
            if(comapredPassword){

                // Generate a token to give to the user (token is a way to encrypt imporant information)
                // JSON Web token encrypts data for us with a special KEY

                const token = await jwt.sign( {id:user._id}, process.env.JWT_SECRET, {expiresIn:'1d'})

                res.status(200).json({user, token})
            } else {
                console.log('Wrong Password')
                res.status(404).json({message:'Email or Password Incorrect'})    
            }
        } else {
            console.log('Incorrect Email, user does not exist')
            res.status(404).json({message:'Email or Password Incorrect'})
        }


    } catch (error) {
        res.status(400).json({message:error.message})
    }
}



const userVerifyView = async (req, res) => {

    try {
        if(req.headers.authorization){
            
            if(req.headers.authorization.startsWith('Token')){
                const token = req.headers.authorization.split(' ')[1]
                // console.log(token)

                const verified = await jwt.verify(token, process.env.JWT_SECRET)
                const user = await User.findById(verified.id)
                if(user){
                    res.status(200).json(user)
                } else {
                    res.status(404).json({message:'User Not Found'})
                }
            } else {
                res.status(403).json({message:'Authorization request must start with the word Token'})    
            }


        } else {
            res.status(403).json({message:'Malformed Request.  Need to include Authorization in the Headers'})
        }


        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const userPasswordResetRequestView = async (req, res) => {
    try {
        
        const user = await User.findOne({email:req.body.email})

        if(user){
            const token = await jwt.sign( {id:user._id}, process.env.JWT_SECRET, {expiresIn:'1h'})
            res.status(200).json({token})

        } else {
            // I don't recommend sending this message but it's good for us to have all the if statement closed out
            // this is just for teaching purposes
            res.status(404).json({message:'User not Found'})
        }



    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const userPasswordResetFormView = async (req, res) => {
    try {

        if(req.body.token){

            const verified = await jwt.verify(req.body.token, process.env.JWT_SECRET)
            const user = await User.findById(verified.id)
            if(user){

                const encryptedPassword = await bcrypt.hash(req.body.password, 10)

                const updatedUser = await User.findByIdAndUpdate(user._id, {password: encryptedPassword}, {new:true})
                if(updatedUser){
                    res.status(200).json(updatedUser)
                } else {
                    res.status(400).json({message:'There was a problem updating the user'})
                }
            }

        } else {
            res.status(403).json({message:'Improper use of this page cannot go any further.  Must have valid token'})
        }
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}




module.exports = { userTestView, userRegisterView, userLoginView, userVerifyView, userPasswordResetRequestView, userPasswordResetFormView }
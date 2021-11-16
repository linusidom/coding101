const User = require('../schemas/userSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userTestView = (req, res) => {
    res.json({message:'Success from controller'})
}


const userRegisterView = async (req, res) => {
    try {
        
        // If the user exists already, username or email
        const userExists = await User.find(
            {
                $or:[
                    {email:req.body.email},
                    {username:req.body.username}
                ]
            })
        console.log(userExists)
        if(userExists.length > 0){
            res.status(403).json({message:'User exists.  Please choose a different Username / Email'})
        } else{

            // Encrypt the password
            const encPassword = await bcrypt.hash(req.body.password, 10)

            const user = await User.create({username: req.body.username, password: encPassword, email: req.body.email})
            if(user){
                res.status(201).json(user)
            } else {
                res.status(403).json({message:'There was a problem creating the user account'})
            }

        }

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const userLoginView = async (req, res) => {
    try {
        
        // If the email exists
        // If the passwords match return the user
        // else return password error
        // else return email does not exist error

        const user = await User.findOne({email:req.body.email})
        if(user){
            const comparePass = await bcrypt.compare(req.body.password, user.password)
            if(comparePass){

                const token = await jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn:'1d'})

                res.status(200).json({user, token})
            } else{
                res.status(404).json({message:'Password Incorrect'})    
            }
        } else {
            res.status(404).json({message:'User not found, check your email address'})
        }



    } catch (error) {
        res.status(400).json({message:error.message})
    }
}



const userVerifyView = async (req, res) => {
    res.status(200).json(req.user)
}





module.exports = {userTestView, userRegisterView, userLoginView, userVerifyView}
const e = require('express')

const User = require('../schemas/userSchema')
const generateToken = require('../utils/generateToken')

const userVerifyView = (req, res) => {
    if(req.user){
        res.status(200).json({authorization: true})
    } else{
        res.status(404).json({authorization: false})
    }
}

// Register View
const userRegisterView = async (req, res) => {

    try {
        
        // Does the user exist?
        const userExist = await User.findOne({username:req.body.username})

        if(userExist){
            res.status(400).json({message:'User already exists'})
        } else {

            // Create the User
            const user = await User.create(req.body)

            if(user){
                res.status(201).json(user)
            } else{
                res.status(400).json({message:'There was a problem with creating the account; Please try again later'})
            }

        }


    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


// Login View
const userLoginView = async (req, res) => {

    try {
        
        // if the username exists and the passwords match
        const user = await User.findOne({username: req.body.username})

        if(user){
            if(user && (await user.comparePassword(req.body.password))){
                
                res.status(200).json({user, token: generateToken(user._id)})
            } else {
                console.log('Wrong Password')
                res.status(403).json({message:'Incorrect Username or Password'})
            }
        } else {
            console.log('No user')
                res.status(403).json({message:'Incorrect Username or Password'})
        }
            


    } catch (error) {
        res.status(400).json({message:error.message})
    }


}

module.exports = {userVerifyView, userRegisterView, userLoginView}
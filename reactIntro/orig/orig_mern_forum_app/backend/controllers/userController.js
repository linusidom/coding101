const User = require('../schemas/userSchemas')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const e = require('express')


const userRegisterView = async (req, res) => {
    try {
        
        const userExists = await User.findOne({email:req.body.email})
        if(userExists){
            res.status(403).json({message:'Sorry but that email is already taken.  You can try to forgot password method to reset your password or pick a different email'})
        } else {
            
            const encryptedPassword = await bcrypt.hash(req.body.password, 10)
            const user = await User.create({username:req.body.username, password:encryptedPassword, email:req.body.email})
            if(user){
                res.status(201).json(user)
            } else {
                res.status(400).json({message:'There was a problem creating your user'})
            }
        }

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const userLoginView = async ( req, res ) => {
    console.log('login view')
    try {

        const user = await User.findOne({email:req.body.email})
        if(user){
            if((await bcrypt.compare(req.body.password, user.password))){
                const token = await jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:'7d'})
                res.status(200).json({user, token})
            } else {
                res.status(404).json({message:'Incorrect Login or Password'})    
            }
        } else {
            res.status(404).json({message:'Incorrect Login or Password'})
        }


    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const userVerifyView = async (req, res) => {
    if(req.user){
        res.status(200).json(req.user)
    } else {
        res.status(403).json({message:'User Verify Failed'})
    }
}

const userPasswordResetReqestView = async (req, res) => {
    try {
        
        const user = await User.findOne({email:req.body.email})
        if(user){
            const token = await jwt({id:user._id}, process.env.JWT_SECRET, {expiresIn:'1d'})
            res.status(200).json({token})
        } else {
            req.status(404).json({message:'User not Found'})
        }

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const userPasswordResetFormView = async (req, res) => {
    try {
        
        const token = await jwt.verify(req.body.token, process.env.JWT_SECRET)
        if(token){
            const user = await User.findById(token.id)
            if(user){

                const encryptedPassword = await bcrypt.hash(req.body.password, 10)
                const updatedUser = await User.findByIdAndUpdate(user._id, {password: encryptedPassword}, {new:true})
                if(updatedUser){
                    res.status(200).json(updatedUser)
                } else {
                    res.status(403).json({message:'There was a problem updating your password'})
                }
            }
        } else {
            res.status(403).json({message:'There was a problem with the Token'})
        }

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const userPasswordChangeView = async ( req, res) => {
    try {
        
        if(req.user){
            
            const encryptedPassword = await bcrypt.hash(req.body.password, 10)
            const user = await User.findByIdAndUpdate(req.user._id, {password: encryptedPassword}, {new:true})
            if(user){
                res.status(200).json(user)
            } else {
                res.status(403).json({message:'There was a problem updating your password, try again'})
            }
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const userMemberView = async (req ,res) => {
    try {
        
        const members = await User.find().select({'username':1, 'email':1})
        res.status(200).json(members)

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const userFollowView = async ( req, res) => {
    try {
        
        const user = await User.findByIdAndUpdate(req.body.userID, {$push: {followers: {user: req.body.memberID}}}, {new:true})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const userUnFollowView = async ( req, res) => {
    try {
        
        const user = await User.findByIdAndUpdate(req.body.userID, {$pull: {followers: {user: req.body.memberID}}}, {new:true})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
module.exports = {userLoginView, userRegisterView, userVerifyView, userPasswordResetFormView, userPasswordResetReqestView, userPasswordChangeView, userMemberView, userFollowView, userUnFollowView}
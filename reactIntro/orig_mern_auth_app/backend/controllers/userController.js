const User = require('../schemas/userSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userRegisterView = async (req, res) => {
    try {
        
        const userExists = await User.findOne({username:req.body.username})
        if(userExists){
            return res.status(403).json({message:'User Already Exists.  Please Login or if you have forgotten your password, try a password reset'})
        } else {
            
            const encryptedPassword = await bcrypt.hash(req.body.password, 10) 
            const user = await User.create({username: req.body.username, email: req.body.email, password: encryptedPassword})
            return res.status(201).json(user)

        }

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const userLoginView = async (req, res) => {
    try {
        
        const user = await User.findOne({email:req.body.email})
        if(user){

            const comparePass = await bcrypt.compare(req.body.password, user.password)
            if(comparePass){
                const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn: '30d'})
                res.status(200).json({user, token})

            } else {
                console.log('Wrong Password')
                res.status(403).json({message:'Incorrect Username or Password'})
            }
        } else {
            console.log('User Does not Exist')
            res.status(403).json({message:'Incorrect Username or Password'})
        }


    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const userVerifyView = async (req, res) => {
    try {
        
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            
            const token = req.headers.authorization.split(' ')[1]
            
            jwt.verify(token, process.env.JWT_SECRET, async function(err, decoded){
                if(err){
                    if(err.name === 'TokenExpiredError'){
                        res.status(403).json({message:'Token Expired. Please Login Again'})
                    } else if (err.name === 'JsonWebTokenError') {
                        res.status(403).json({message:'Incorrect Token. Please Login Again'})
                    } else {
                        res.status(403).json({message:'Issues with Token. Please Login Again'})
                    }
                } else {
    
                    const user = await User.findOne({_id:decoded.id})
                    if(user){
                        res.status(200).json(user)
                    } else {
                        res.status(404).json({message:'User Not Found'})
                    }
    
                }
            })
    
        } else {
            res.status(403).json({message:'No Token in Header'})
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const userPasswordResetForm = async (req, res) => {
    
    try {
        
        const user = await User.findOne({email:req.body.email})
        if(user){

            // give a token back to use in an email
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:'1h'})
            res.status(200).json({token})

        } else {
            res.status(400).json({message:'User Not Found - we really should not send this message, but if you wanted to this is where it would be'})
        }


    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const userPasswordReset = async (req, res) => {
    try {
        
        jwt.verify(req.body.token, process.env.JWT_SECRET, async function(err, decoded){
            if(err){
                if(err.name === 'TokenExpiredError'){
                    res.status(403).json({message:'Token Expired. Please Login Again'})
                } else if (err.name === 'JsonWebTokenError') {
                    res.status(403).json({message:'Incorrect Token. Please Login Again'})
                } else {
                    res.status(403).json({message:'Issues with Token. Please Login Again'})
                }
            } else {

                const user = await User.findOne({_id:decoded.id})
                if(user){
                    
                    const encryptedPassword = await bcrypt.hash(req.body.password, 10)
                    const updatedUser = await User.findByIdAndUpdate(user._id, {password: encryptedPassword}, {new:true})
                    res.status(200).json(updatedUser)

                } else {
                    res.status(404).json({message:'User Not Found'})
                }

            }
        })

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

module.exports = {userRegisterView, userLoginView, userVerifyView, userPasswordResetForm, userPasswordReset}
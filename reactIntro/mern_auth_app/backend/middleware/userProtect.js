const e = require('express')
const jwt = require('jsonwebtoken')
const User = require('../schemas/userSchema')

const protect = async (req, res, next) => {

    // console.log(req.headers)

    if(req.headers.authorization){
        if(req.headers.authorization.startsWith('Bearer')){

            try {
                const token = req.headers.authorization.split(' ')[1]

                const compareResult = jwt.verify(token, process.env.JWT_SECRET)

                const user = await User.findById(compareResult.id)

                if(user){
                    req.user = user._id
                    req.username = user.username
                    // req.user = user

                    next()
                } else {
                    res.status(400).json({message:'User not Authorized'})
                }    
            } catch (error) {
                res.status(400).json({message:error.message})
            }

        } else {
            res.status(400).json({message:"Malformed Authorization;(Don't put this part in your message unless you want to; not recommended) basically you haven't included the word Bearer in your auth token"})
        }
    } else {
        res.status(400).json({message: 'Authorization not included in request'})
    }

    // Really important to move onto the next function
    // Javascript is really weird and takes time getting used to the weirdness
}

module.exports = protect
const User = require('../schemas/userSchemas')
const jwt = require('jsonwebtoken')

const protect = async (req, res, next) => {
    try {
        
        if(req.headers.authorization){
            if(req.headers.authorization.startsWith('Token')){
                const token = await jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET)
                if(token){
                    const user = await User.findById(token.id)
                    if(user){
                        // req.username = user.username
                        // req.userID = user._id
                        req.user = user
                        next()
                    } else {
                        res.status(404).json({message:'User does not exist'})
                    }
                } else {
                    res.status(404).json({message:'There was a problem with your token.  Login again'})
                }
            } else {
                res.status(404).json({message:'Auth Parameter does not include the correct Token Message'})
            }
        } else {
            res.status(404).json({message:'Request Does Not contain authorization parameter'})
        }

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

module.exports = protect
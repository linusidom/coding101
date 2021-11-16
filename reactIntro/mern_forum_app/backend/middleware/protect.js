const User = require('../schemas/userSchema')
const jwt = require('jsonwebtoken')

const protect = async (req, res, next) => {
    try {
        
        // if we have token in the req
        // verify the token
        // if the token is correct find the user
        // else return token not correct
        // else return token not in header error

        if(req.headers.authorization){
            if(req.headers.authorization.startsWith('Token')){
                const token = req.headers.authorization.split(' ')[1]
                const verified = await jwt.verify(token, process.env.JWT_SECRET)
                if(verified){
                    const user = await User.findById(verified.id)
                    if(user){
                        req.user = user
                        next()
                    } else {
                        res.status(404).json({message:'User not found'})
                    }
                }
            } else {
                res.status(400).json({message:'Token is not in header'})    
            }
        } else {
            res.status(400).json({message:'Authorization not in header'})
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


module.exports = protect
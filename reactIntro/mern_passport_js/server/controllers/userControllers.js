const User = require('../schemas/userSchema')
const bcrypt = require('bcryptjs')
const passport = require('../middleware/passportJsMiddleware')

const userListView = async (req, res) => {
    // Temp response for testing
    res.status(200).json({message:'Success!'})
}

const userRegisterView = async (req, res) => {
    try {
        
        // If the user exists, we want to report an error
        const userExists = await User.find({username: req.body.username})
        if(userExists.length > 0){
            res.status(400).json({error:'User exists already'})    
        } else {
            const encryptedPassword = await bcrypt.hash(req.body.password, 10)
            const user = await User.create({username: req.body.username, password: encryptedPassword})
            res.status(201).json(user)
        }



    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


const userLoginView = async (req, res, next) => {
    // try {
        
    //     const user = await User.findOne({username: req.body.username})
    //     if(user){
    //         // Check if the passwords Match
    //         const comparePass = await bcrypt.compare(req.body.password, user.password)
    //         if(comparePass){
    //             res.status(200).json(user)
    //         } else {
    //             res.status(400).json({error:'Password is incorrect'})    
    //         }

    //     } else {
    //         res.status(400).json({error:'User does Not exist'})    
    //     }

    // } catch (error) {
    //     res.status(400).json({error:error.message})
    // }

    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        // if(info) { return res.status(403).json({error:info.message})}
        if (!user) { return res.status(404).json({error:'Invalid Username or Password Login'}) }
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          res.status(200).json(user)
        //   return res.redirect('/users/' + user.username);
        });
      })(req, res, next);

}


const userVerifyView = async (req, res) => {
    if(req.user){
        res.status(200).json(req.user)
    } else {
        res.status(403).json({error:'Please Login Again'})
    }
}

const userLogoutView = async (req, res) => {
    if(req.user){
        
        req.logout();
        res.status(200).json({message:'User Logged Out Successfully'})
    } else {
        res.status(403).json({error:'Please Login Again'})
    }
}

module.exports = {userListView, userRegisterView, userLoginView, userVerifyView, userLogoutView}
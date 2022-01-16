const loginRequired = (req, res, next) => {
    if(req.user){
        next()
    } else {
        res.status(400).json({notLoggedIn:'User is not logged in'})
    }
}


const isAdmin = (req, res, next) => {
    if(req.user.username === 'admin'){
        next()
    } else {
        res.status(400).json({notLoggedIn:'User is not logged in'})
    }
}

module.exports = {loginRequired, isAdmin}
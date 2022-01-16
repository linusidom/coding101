const {User} = require('../schemas/userSchema')
const bcrypt = require('bcryptjs')
const {passport} = require('../middleware/passportConfig')

require('dotenv').config()

var omise = require('omise')({
    'publicKey': process.env.OMISE_PUBLIC_KEY,
    'secretKey': process.env.OMISE_SECRET_KEY,
  });

const userRegisterView = async (req, res) => {
    try {
        
        const userExists = await User.find( 
            { $or: 
                [ 
                    { username: req.body.username },
                    { email: req.body.email }
                ] 
            })
        if(userExists.length > 0) {
            res.status(403).json({error:'User Exists, choose another Username/Email'})
        } else {

            const encryptedPassword = await bcrypt.hash(req.body.password, 10)

            const omiseCustomer = await omise.customers.create({
                description: req.body.username,
                email: req.body.email
              }, function(error, customer) {
                if(error){
                    console.log(error)
                    // res.status(400).json({error:error.message})
                }
              });

              console.log('Omise Customer',omiseCustomer)

            const user = await User.create({...req.body, password: encryptedPassword, omise: omiseCustomer.id})
            res.status(201).json(user)
        }

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const userLoginView = async (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
    if (err) { return res.status(400).json({error:err.message}); }
    if (!user) { return res.status(400).json({error:'User Not Valid'}); }
    req.logIn(user, function(err) {
        if (err) { return res.status(400).json({error:err.message}); }
        res.status(200).json(user)
    });
    })(req, res, next);
}

const userVerifyView = (req, res) => {
    // console.log('Verify View', req.user)
    if(req.user){
        res.status(200).json(req.user)
    } else {
        res.status(400).json({error:'User Not Logged In'})
    }
    
    
}


const userLogoutView = (req, res) => {
    if(req.user){
        req.logout()
        
        res.status(200).json({userLoggedOut:'User has logged Out'})
    } else {
        res.status(400).json({error:'User Not logged in'})
    }
}

const userAddProductView = async (req, res) => {

    console.log(req.session.cart.products)
    try {
        
        const user = await User.findByIdAndUpdate(req.user._id, {$push: {products: req.session.cart.products, chargeID: req.session.chargeID, omiseChageID: req.session.omiseChargeID, orderID: req.session.orderID}}, {new:true})


        delete req.session.cartID
        delete req.session.cart
        delete req.session.order
        delete req.session.orderID
        delete req.session.omiseChageID
        delete req.session.chargeID
        

        req.session.save()

        res.status(200).json(user)

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {userRegisterView, userLoginView, userVerifyView, userLogoutView, userAddProductView}

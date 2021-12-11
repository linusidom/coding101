const Cart = require('../schemas/cartSchema')

const cartGetOrCreate = async (req, res, next) => {

    try {
        if(req.cart){
            const cart = await Cart.findById(req.cart._id)

            if(cart.user !== null && req.user){

                await cart.set({user:req.user._id})
                await cart.save()
                req.cart = cart
                next()
            } else {

                req.cart = cart
                next()
            }
        } else {
            if(req.user){
                
                const cart = await Cart.create({user:req.user._id, status:'active'})
                req.cart = cart
                next()
                
            } else {

                const cart = await Cart.create({status:'active'})
                req.cart = cart
                next()
            }
        }

    } catch (error) {
        console.log("error", error.message)
        res.status(400).json({message:error.message})
    }
}

module.exports = cartGetOrCreate
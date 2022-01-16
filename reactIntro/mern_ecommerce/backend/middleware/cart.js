const {Cart} = require('../schemas/cartSchema')

const createNewCart = async (req) => {
    if(req.user){
                    
        // If the user is already logged in, we can create a cart for them
        const cart = await Cart.create({user: req.user._id, total: 0, quantity: 0})

        req.session.cartID = cart._id
        req.session.cart = cart
        req.session.save()

        return
    } else {
        const cart = await Cart.create({total: 0, quantity: 0})

        req.session.cartID = cart._id
        req.session.cart = cart
        req.session.save()

        return
    }   
}




const cartGetOrCreate = async (req, res, next) => {

    // We're going to take advantage of sessions and store data in here

    if(req.session.cartID){
        // We have a cart already created
        const cart = await Cart.findById(req.session.cartID)

        if(cart) {
            // If the cart exists we want to check if it has a user or not
            // console.log('Cart found')
            if(!cart.user){
                // console.log('Cart found with no user')
                // If the cart does not have a user assign it
                cart.set({user:req.user})
                await cart.save()
                
                req.session.cartID = cart._id
                req.session.cart = cart
                req.session.save()
    
                next()

            } else if(req.user){
                // console.log('Cart found and User is logged in')
                if(cart.user.equals(req.user._id)){
                    // console.log('Cart found and the user matches the req.user')
                    req.session.cartID = cart._id
                    req.session.cart = cart
                    req.session.save()
        
                    next()
                } else {
                    // console.log('Cart found and user Ids do not match')
                    await createNewCart(req)
                    next()
                     
                }
            } else {
                // console.log('Cart found, user is not logged in')
                next()
            }

        } else {
            // console.log('cart not found, create a new one')
            await createNewCart(req)
            next()
        }


    } else  {
        // console.log('No cart ID')
        await createNewCart(req)
        next()
    }

}

module.exports = {cartGetOrCreate}
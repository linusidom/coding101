const {Cart} = require('../schemas/cartSchema')


const cartGetView = async (req, res) => {

    res.status(200).json(req.session.cart)


}

const cartAddView = async (req, res) => {

    try {
        const cart = await Cart.findByIdAndUpdate(req.session.cartID, 
            {
                $push: {products: req.body},
                $inc: {
                    quantity: 1,
                    total: parseInt(req.body.price)
                }
    
            }, {new: true})
        
        req.session.cartID = cart._id
        req.session.cart = cart
        req.session.save()
        
        res.status(200).json(cart)

    } catch (error) {
        res.status(400).json({error:error.message})
    }

    
}

const cartRemoveView = async (req, res) => {

    try {
        const cart = await Cart.findByIdAndUpdate(req.session.cartID, 
            {
                $pull: {products: {_id: req.body._id}},
                $inc: {
                    quantity: -1,
                    total: -parseInt(req.body.price)
                }
    
            }, {new: true})
        
        req.session.cartID = cart._id
        req.session.cart = cart
        req.session.save()
        
        res.status(200).json(cart)
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {cartGetView, cartAddView, cartRemoveView}


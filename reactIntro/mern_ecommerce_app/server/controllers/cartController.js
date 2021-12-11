const Cart = require('../schemas/cartSchema')

const cartListView = async (req, res) => {
    try {
        
        const carts = await Cart.find()
        res.status(200).json(carts)

    } catch (error) {
        res.status(400).json({message:error.message})       
    }
}

const cartDeleteView = async (req, res) => {
    try {
        
        const cart = await Cart.findByIdAndDelete(req.params.cartID)
        res.status(200).json(cart)

    } catch (error) {
        res.status(400).json({message:error.message})       
    }
}

const cartAddView = async (req, res) => {
    // console.log('Cart Add', req.cart, req.body.course)
    try {
     
        const cart = await Cart.findByIdAndUpdate(req.cart._id, {$push: {courses: req.body.course}}, {new: true})
        if(cart){
            res.status(200).json(cart)
        } else {
            res.status(404).json({message:'Cart not found'})    
        }
    
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const cartRemoveView = async (req, res) => {
    try {
        
        const cart = await Cart.findByIdAndUpdate(req.cart._id, {$pull: {courses: {_id: req.body.course._id}}}, {new: true})
        if(cart){
            res.status(200).json(cart)
        } else {
            res.status(404).json({message:'Cart not found'})    
        }
    
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}



const cartDetailView = async (req, res) => {
    try {
        
        const cart = await Cart.findOne({user: req.user._id, status: 'active'})
        if(cart){
            res.status(200).json(cart)
        } else {
            res.status(404).json({message:'Cart not found'})
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

module.exports = {cartAddView, cartRemoveView, cartDetailView, cartListView, cartDeleteView}
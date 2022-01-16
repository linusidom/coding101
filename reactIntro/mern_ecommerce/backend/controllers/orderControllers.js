const {Order} = require('../schemas/orderSchema')

const orderListView = async (req, res) => {
    try {
        
        const orders = await Order.find()
        res.status(200).json(orders)

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const orderCreateView = async (req, res) => {
    try {
        
        const order = await Order.create({cart: req.session.cart, user: req.user._id, chargeID: req.session.chargeID, omiseChargeID: req.session.omiseChargeID, orderTotal: req.session.cart.total })

        req.session.orderID = order._id
        req.session.order = order
        req.session.save()

        res.status(201).json(order)

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {orderListView, orderCreateView}
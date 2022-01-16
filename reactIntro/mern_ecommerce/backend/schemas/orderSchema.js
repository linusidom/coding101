const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({}, {timestamps: true, strict: false})

const Order = mongoose.model('order', orderSchema)

module.exports = {Order, orderSchema}
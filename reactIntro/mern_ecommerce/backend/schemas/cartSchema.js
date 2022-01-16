const mongoose = require('mongoose')
const {productSchema} = require('./productSchema')


const cartSchema = mongoose.Schema({products:[productSchema]}, {timestamps: true, strict: false})

const Cart = mongoose.model('cart', cartSchema)

module.exports = {Cart, cartSchema}
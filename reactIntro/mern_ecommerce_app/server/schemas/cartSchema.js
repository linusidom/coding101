const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({},{timestamps: true, strict: false})

const cartSchema = mongoose.Schema({courses: [courseSchema]}, {timestamps: true, strict: false})

const Cart = mongoose.model('cart', cartSchema)

module.exports = Cart
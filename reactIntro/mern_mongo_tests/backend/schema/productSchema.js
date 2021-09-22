const mongoose = require('mongoose')

const productSchema = mongoose.Schema({}, {timestamps:true, strict: false})

const Product = new mongoose.model('products', productSchema)

module.exports = Product
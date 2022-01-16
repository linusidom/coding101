const mongoose = require('mongoose')

const productSchema = mongoose.Schema({}, {timestamps: true, strict: false})

const Product = mongoose.model('product', productSchema)

module.exports = {Product, productSchema}
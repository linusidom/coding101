const mongoose = require('mongoose')
const {productSchema} = require('./productSchema')


const cardSchema = mongoose.Schema({}, {timestamps: true, strict: false})

const userSchema = mongoose.Schema({cards: [cardSchema] , products: [productSchema]}, {timestamps: true, strict: false})

const User = mongoose.model('user', userSchema)

module.exports = {User, userSchema}
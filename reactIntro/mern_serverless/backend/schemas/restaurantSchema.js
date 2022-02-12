const mongoose = require('mongoose')

const restaurantSchema = mongoose.Schema({}, {timestamps: true, strict: false})

const Restaurant = mongoose.model('restaurant', restaurantSchema)

module.exports = {Restaurant, restaurantSchema}
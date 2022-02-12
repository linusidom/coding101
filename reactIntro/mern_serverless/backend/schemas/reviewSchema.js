const mongoose = require('mongoose')
const {restaurantSchema} = require('./restaurantSchema')
const reviewSchema = mongoose.Schema({}, {timestamps: true, strict: false})

const Review = mongoose.model('review', reviewSchema)

module.exports = {Review, reviewSchema}
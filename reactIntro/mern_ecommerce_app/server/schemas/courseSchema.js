const mongoose = require('mongoose')

const lessonSchema = mongoose.Schema({}, {timestamps:true, strict: false})
const courseSchema = mongoose.Schema({ lessons:[lessonSchema]}, {timestamps: true, strict: false})

const Course = mongoose.model('course', courseSchema)

module.exports = Course
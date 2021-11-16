const mongoose = require('mongoose')

const followerSchema = mongoose.Schema({}, {timestamps:true, strict:false})

const userSchema = mongoose.Schema({followers:[followerSchema]},{timestamps:true, strict: false})

const User = mongoose.model('user', userSchema)

module.exports = User
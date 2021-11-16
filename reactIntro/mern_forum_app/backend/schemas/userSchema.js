const mongoose = require('mongoose')

const userSchema = mongoose.Schema({}, {timestamps:true, strict:false})

const User = mongoose.model('user', userSchema)

module.exports = User
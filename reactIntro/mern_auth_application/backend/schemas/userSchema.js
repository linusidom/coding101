const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            require: true
        },
    },
    {
        timestamps: true,
        strict: false
    }
)

const User = mongoose.model('user', userSchema)

module.exports = User
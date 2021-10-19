const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        strict: false
    }
)



// Keep this space for extra functions in the future
userSchema.pre('save', async function(next) {

    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})


userSchema.methods.comparePassword = async function(enteredPassword) {
    console.log('Compare',this)
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('user', userSchema)

module.exports = User
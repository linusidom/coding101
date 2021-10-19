const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({},
    {
        timestamps: true,
        strict: false
    }
)

const Video = new mongoose.model('video', videoSchema)

module.exports = Video
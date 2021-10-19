const mongoose = require('mongoose')


const practiceSchema = new mongoose.Schema({},
    {
        strict: false
    }
)

const Practice = new mongoose.model("movie", practiceSchema)

module.exports = Practice
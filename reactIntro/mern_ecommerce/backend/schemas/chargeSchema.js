const mongoose = require('mongoose')

const chargeSchema = mongoose.Schema({}, {timestamps: true, strict: false})

const Charge = mongoose.model('charge', chargeSchema)

module.exports = {Charge, chargeSchema}
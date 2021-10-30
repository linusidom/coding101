// This will hold the basic express configuration

const express = require('express')
const userRoutes = require('./routes/userRoutes')
const app = express()

// If we want to read data in (request data) we need this
app.use(express.json())

app.use('/users', userRoutes)

module.exports = app
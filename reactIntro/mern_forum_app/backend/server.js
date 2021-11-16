// Configure app and export app
const express = require('express')
const app = express()
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')


// If we want to receive data we have to JSON parse it
app.use(express.json())

app.use('/users', userRoutes)
app.use('/posts', postRoutes)

module.exports = app
const express = require('express')
const postRoutes = require('./routes/postRoutes')
const userRoutes = require('./routes/userRoutes')
const app = express()

app.use(express.json())

app.use('/posts', postRoutes)
app.use('/users', userRoutes)

module.exports = app
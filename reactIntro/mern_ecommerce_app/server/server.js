const express = require('express')
const app = express()
const courseRoutes = require('./routes/courseRoutes')
const userRoutes = require('./routes/userRoutes')
const cartRoutes = require('./routes/cartRoutes')
app.use(express.json())

app.use('/courses', courseRoutes)
app.use('/users', userRoutes)
app.use('/cart', cartRoutes)

module.exports = app
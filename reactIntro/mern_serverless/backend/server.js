// App configuration and routes

const express = require('express')
const app = express()
const restaurantRoutes = require('./routes/restaurantRoutes')

require('dotenv').config()

app.use(express.json())

app.use('/restaurant', restaurantRoutes)


module.exports = app
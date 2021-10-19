const express = require('express')
const app = express()
const videoRoutes = require('./routes/videoRoutes')

app.use(express.json())

app.use('/videos', videoRoutes)


module.exports = app
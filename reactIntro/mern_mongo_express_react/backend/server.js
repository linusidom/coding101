const express = require('express')
const connectToDatabase = require('./database/db')
const postRoutes = require('./routes/postRoutes')
const app = express()

require('dotenv').config()

connectToDatabase(process.env.MONGO_URI)

// This will be a problem and we will solve it in the future
app.use('/posts', postRoutes)

const PORT = 5000
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
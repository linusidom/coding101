const express = require('express')
const connectToDatabase = require('./database/db')
const app = express()
const postRoutes = require('./routes/postRoutes')

require('dotenv').config()

connectToDatabase(process.env.MONGO_URI)

app.use(express.json()) // Converts bytes String off the wire to json object
app.use('/posts', postRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`))


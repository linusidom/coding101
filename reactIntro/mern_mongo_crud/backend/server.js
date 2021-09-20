const express = require('express')
const connectToDatabase = require('./database/db')
const postRoutes = require('./routes/postRoutes')
const app = express()

// This will call the .env file variables
require('dotenv').config()

// This takes in all a requests and converts them to a JSON format for ingestion
// Without this, express cannot receive data from outside - IE NO POST/PUT REQUESTS without this
app.use(express.json())

connectToDatabase(process.env.MONGO_URI)


app.use('/posts', postRoutes)

const PORT = 5000

app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`))
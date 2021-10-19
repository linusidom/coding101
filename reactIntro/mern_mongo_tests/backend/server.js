const express = require('express')
const connectToDatabase = require('./database/db')

const practiceRoutes = require('./routes/practiceRoutes')
const postRoutes = require('./routes/postRoutes')
const userRoutes = require('./routes/userRoutes')
const app = express()
require('dotenv').config()



connectToDatabase(process.env.MONGO_SANDBOX)
app.use(express.json())
app.use('/posts', postRoutes)
app.use('/users', userRoutes)
app.use('/practice', practiceRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`))
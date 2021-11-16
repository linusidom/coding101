const mongoose = require('mongoose')
const app = require('./server.js')
require('dotenv').config()

const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT

const connectToDB = async (uri, port) => {
    try {
        
        const client = await mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`Connected to DB: ${client.connection.host}`)
        app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`))

    } catch (error) {
        console.log(`There was a problem: ${error.message}`)
    }
}

connectToDB(MONGO_URI, PORT)
const mongoose = require('mongoose')
const app = require('./server.js')
require('dotenv').config()

const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT || 5000

const connectToDB = async (uri, port) => {
    try {
        
        const client = await mongoose.connect(uri)

        console.log(`Connected to DB: ${client.connection.host}`)

        app.listen(port, () => console.log(`Server started on port ${port}`))

    } catch (error) {
        console.log(`There was a problem connecting to the DB: ${error.message}`)
    }
}

connectToDB(MONGO_URI, PORT)
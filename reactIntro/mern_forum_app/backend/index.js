const mongoose = require('mongoose')
const app = require('./server.js')
require('dotenv').config()

const PORT = process.env.PORT
const uri = process.env.MONGO_URI

const connectToDatabase = async (uri, port) => {
    try {
        const client = await new mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`Connected to MongoDB: ${client.connection.host}`)

        app.listen(port, () => console.log(`Server started on port ${port}`))
    } catch (error) {
        console.log(`There was a problem connecting to the DB: ${error.message}`)
    }
}

connectToDatabase(uri, PORT)
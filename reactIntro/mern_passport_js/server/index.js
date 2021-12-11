// Database setup

const mongoose = require('mongoose')
const app = require('./server.js')
require('dotenv').config()


MONGO_URI = process.env.MONGO_URI
PORT = process.env.PORT

const connectToDatabase = async (uri, port) => {
    try {
        const client = await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });        
        console.log(`Connected to Mongo: ${client.connection.host}`)
        app.listen(port, () => console.log(`Server started on PORT ${port}`))
    } catch (error) {
        console.log(`Houston we have a problem! ${error.message}`)
    }
}

connectToDatabase(MONGO_URI, PORT)
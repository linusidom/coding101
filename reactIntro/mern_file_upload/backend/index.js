const mongoose = require('mongoose')
const app = require('./server.js')
require('dotenv').config()

const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT

const connectToDatabase = async (uri, port) => {
    try {
        
        const client = await mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`Connected to Mongo: ${client.connection.host}`)
        
        app.listen(port, () => console.log(`Server started on port ${port}`))


    } catch (error) {
        console.log(`Houston We have a problem: ${error.message}`)
    }
}



connectToDatabase(MONGO_URI, PORT)
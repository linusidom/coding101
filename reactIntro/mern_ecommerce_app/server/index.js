const mongoose = require('mongoose')
const dev = require('./config.js')
const app = require('./server.js')

const PORT = dev.PORT
const MONGO_URI = dev.MONGO_URI

const connectToDatabase = async (uri, port) => {
    try {
        
        const client = await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`Connected to Mongo: ${client.connection.host}`)
        app.listen(port, () => console.log(`Server started on port ${port}`))

    } catch (error) {
        console.log(`There was a problem: ${error.message}`)
    }
}

connectToDatabase(MONGO_URI, PORT)
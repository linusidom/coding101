const mongoose = require('mongoose')
const dev = require('./dev')
const app = require('./server')

const MONGO_URI = dev.MONGO_URI
const PORT = dev.PORT

const connectToDatabase = async (uri, port) => {
    try {
        
        const client = await mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`Connected to Mongo ${client.connection.host}`)
        app.listen(port, () => console.log(`Server started on port ${port}`))
    } catch (error) {
        console.log(`There was a problem: ${error.message}`)
    }
}

connectToDatabase(MONGO_URI, PORT)
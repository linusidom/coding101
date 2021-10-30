// This is where we will connect to the database
// We need to configure the .env file as well

const mongoose = require('mongoose')
const app = require('./server')
require('dotenv').config()

const uri = process.env.MONGO_URI
const PORT = process.env.PORT

const connectToDatabase = async (uri, port) => {
    try {
        
        const client = await new mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`Connected to Database: ${client.connection.host}`)
        app.listen(PORT, () => console.log(`Server started on Port ${port}`))

    } catch (error) {
        
        console.log(`There was a problem connecting to the Database: ${error.message}`)

    }
} 

connectToDatabase(uri, PORT)
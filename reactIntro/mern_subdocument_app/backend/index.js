// We want to connect to the database and THEN
// Start our express App

// Import App into this file
const app = require('./server')
require('dotenv').config()

const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000

const uri = process.env.MONGO_URI

const connectToDatabase = async () => {
    
    try {
        const client = await new mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });    

        console.log(`Connectd to Mongo: ${client.connection.host}`)

        // Start server??
        app.listen(PORT, () => console.log(`Started Server on PORT: ${PORT}`))


    } catch (error) {
        console.log(`We have a problem: ${error.message}`)
        
    }

    
}

connectToDatabase()



// connect to the database

    
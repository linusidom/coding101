const app = require('./server')
const mongoose = require('mongoose')

require('dotenv').config()

const uri = process.env.MONGO_URI
const PORT = process.env.PORT || 5000

const connectToDB = async () => {

    try {
        
        const client = await new mongoose.connect(uri)

        console.log(`Connected to the DB: ${client.connection.host}`)
        app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`))


    } catch (error) {
        console.log(`There was a problem ${error.message}`)
    }
}

connectToDB()

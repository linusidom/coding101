const mongoose = require('mongoose')
const app = require('./server')

require('dotenv').config()

const PORT = process.env.PORT || 5000
const uri = process.env.MONGO_URI


const connectToDatabase = async (uri) => {

    try {
        const client = await new mongoose.connect(uri, {useUnifiedTopology:true})
        console.log(`Connected to Database: ${client.connection.host}`)

        app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`))
    } catch (error) {
        console.log(`There was a problem: ${error.message}`)
    }
}

connectToDatabase(uri)
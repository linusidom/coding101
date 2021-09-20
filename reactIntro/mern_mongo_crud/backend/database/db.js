const mongoose = require('mongoose')


const connectToDatabase = async (uri) => {
    try {
        
        const client = await new mongoose.connect(uri,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
        console.log('Connected to Mongo DB: ', client.connection.host)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectToDatabase
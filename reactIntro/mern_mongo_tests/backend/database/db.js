const mongoose = require('mongoose')


const connectToDatabase = async () => {
    try {
        const uri = "mongodb+srv://linusidom:xHNYsqw0SLEkjm9W@cluster0.kbbsq.mongodb.net/TestProject?retryWrites=true&w=majority";

        const client = await new mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log(`Connected to MongoDB: ${client.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToDatabase
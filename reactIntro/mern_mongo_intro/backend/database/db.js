const mongoose = require('mongoose')



const connectToDatabase = async (uri) => {
    
    try {
        // const uri = "mongodb+srv://spotwerkz:7YIFfI1Y9WqhJvnR@cluster0.l4ium.mongodb.net/spotWerkzDatabase?retryWrites=true&w=majority";
        const client = await new mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });    
        console.log('Connected to Mongo DB: ',client.connection.host)
    } catch (error) {
        console.log('Problem Connection to DB', error)
    }
}

module.exports = connectToDatabase







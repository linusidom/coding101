const express = require('express')
const connectToDatabase = require('./database/db')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const kittenRoutes = require('./routes/kittenRoutes')

// console.log(process.env)



connectToDatabase(process.env.MONGO_URI)


app.use('/kittens', kittenRoutes)


// setTimeout(() => {

//     // Create the Schema/Model
//     const kittySchema = new mongoose.Schema({
//         name: String
//       });
    
//     console.log('Schema Output', kittySchema)

//     // Define the Collection/table
//     const Kitten = mongoose.model('Kitten', kittySchema);
//     console.log('Collection Output', Kitten)

//     // // Create a document/row
//     // This will not write to the database
//     const silence = new Kitten({ name: 'Silence' });
    
//     // Mongoose won't write to the database until we save the data
//     silence.save()
//     console.log('Document Output', silence)
// }, 5000)





const port = 5000
app.listen(port, () => console.log(`Server started on Port ${port}`))
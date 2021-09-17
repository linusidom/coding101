const mongoose = require('mongoose')


const kittySchema = new mongoose.Schema({
    name: String
    });

// console.log('Schema Output', kittySchema)


// Define the Collection/table
const Kitten = mongoose.model('Kitten', kittySchema);
// console.log('Collection Output', Kitten)

module.exports = Kitten
const mongoose = require('mongoose')
const express = require('express')
const app = express()



const connectToDatabase = async (uri) => {

    try {
        const client = await new mongoose.connect(uri, {useUnifiedTopology:true})
        console.log(`Connected to Database: ${client.connection.host}`)


    } catch (error) {
        console.log(`There was a problem: ${error.message}`)
    }
}

module.exports = connectToDatabase
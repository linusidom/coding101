const express = require('express')
const connectToDatabase = require('./database/db')
const app = express()
const productRoutes = require('./routes/productRoutes')
const path = require('path')
require('dotenv').config()

connectToDatabase(process.env.MONGO_URI)

app.use(express.json())

app.use('/products', productRoutes)

__dirname = path.resolve()
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'frontend/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
} else{
    app.get('/', (req, res) => {
        res.send("API is Running...")
    })
}




app.listen(process.env.PORT || 5000)
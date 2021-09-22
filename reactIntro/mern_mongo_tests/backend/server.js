const express = require('express')
const connectToDatabase = require('./database/db')
const app = express()
const productRoutes = require('./routes/productRoutes')

connectToDatabase()

app.use('/products', productRoutes)

const PORT = 5000
app.listen(PORT, () => console.log(`Connected to PORT ${PORT}`))
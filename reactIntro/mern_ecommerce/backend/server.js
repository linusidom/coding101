// App configuration and routes

const express = require('express')
const app = express()
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
const cardRoutes = require('./routes/cardRoutes')
const orderRoutes = require('./routes/orderRoutes')

const session = require('express-session')
const cookieParse = require('cookie-parser')
const {passport} = require('./middleware/passportConfig')

const MongoConnect = require('connect-mongo')

require('dotenv').config()

const SESSION_SECRET = process.env.SESSION_SECRET
const MONGO_URI = process.env.MONGO_URI

app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: new MongoConnect({mongoUrl: process.env.MONGO_URI, collectionName:'sessions'})
}))

app.use(cookieParse(SESSION_SECRET))
app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userRoutes)
app.use('/product', productRoutes)
app.use('/cart', cartRoutes)
app.use('/card', cardRoutes)
app.use('/order', orderRoutes)

module.exports = app
const express = require('express')
const userRoutes = require('./routes/userRoutes')
const app = express()

const cookieParser = require('cookie-parser')

const session = require('express-session')

const passport = require('./middleware/passportJsMiddleware')

require('dotenv').config()

const SESSION_SECRET = process.env.SESSION_SECRET

app.use(express.json())


app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 90 * 24 * 60 * 60 * 1000 }
  }))

app.use(cookieParser(SESSION_SECRET))

app.use(passport.initialize());
app.use(passport.session());


app.use('/user', userRoutes)

module.exports = app
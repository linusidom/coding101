const express = require('express')
const { userListView, userRegisterView, userLoginView, userVerifyView, userLogoutView } = require('../controllers/userControllers')
const router = express.Router()

router.get('/list', userListView)

router.post('/register', userRegisterView)

router.post('/login', userLoginView)

router.get('/verify', userVerifyView)

router.get('/logout', userLogoutView)

module.exports = router
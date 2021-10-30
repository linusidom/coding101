const express = require('express')
const { userTestView, userRegisterView, userLoginView, userVerifyView, userPasswordResetRequestView, userPasswordResetFormView } = require('../controllers/userController')
const router = express.Router()

router.get('/', userTestView)

router.post('/register', userRegisterView)

router.post('/login', userLoginView)

router.get('/verify', userVerifyView)

router.post('/passwordResetRequest', userPasswordResetRequestView)

router.post('/passwordResetForm', userPasswordResetFormView)

module.exports = router
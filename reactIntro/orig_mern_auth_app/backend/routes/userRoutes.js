const express = require('express')
const router = express.Router()
const {userRegisterView, userLoginView, userVerifyView, userPasswordResetForm, userPasswordReset} = require('../controllers/userController')

router.post('/register', userRegisterView)

router.post('/login', userLoginView)

router.post('/verify', userVerifyView)


// Password Section
router.post('/passwordResetForm', userPasswordResetForm)
router.post('/passwordReset', userPasswordReset)

module.exports = router
const express = require('express')
const { userTestView, userRegisterView, userLoginView, userVerifyView } = require('../controllers/userController')
const protect = require('../middleware/protect')
const router = express.Router()

router.get('/', userTestView)

router.post('/register', userRegisterView)
router.post('/login', userLoginView)
router.get('/verify', protect, userVerifyView)

module.exports = router
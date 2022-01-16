const express = require('express')
const { userRegisterView, userLoginView, userVerifyView, userLogoutView, userAddProductView } = require('../controllers/userControllers')
const { loginRequired } = require('../middleware/authMiddleware')
const router = express.Router()


router.post('/register', userRegisterView)
router.post('/login', userLoginView)
router.get('/verify', userVerifyView)
router.get('/logout', userLogoutView)
router.post('/addProduct', loginRequired, userAddProductView)

module.exports = router
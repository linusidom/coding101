const express = require('express')
const {userListView, userRegisterView, userLoginView, userVerifyView} = require('../controllers/userController')
const protect = require('../middleware/userProtect')
const router = express.Router()

router.route('/').post(userRegisterView)

router.route('/login').post(userLoginView)

router.route('/verify').get(protect, userVerifyView)

module.exports = router
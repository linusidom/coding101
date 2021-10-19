const express = require('express')
const { userGetTest } = require('../controllers/userController')
const router = express.Router()

router.route('/').get(userGetTest)

module.exports = router
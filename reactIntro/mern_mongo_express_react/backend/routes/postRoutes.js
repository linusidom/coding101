const express = require('express')
const { postListView } = require('../controllers/postControllers')
const router = express.Router()

router.get('/', postListView)

module.exports = router
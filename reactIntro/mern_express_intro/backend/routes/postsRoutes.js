const express = require('express')
const postListView = require('../controllers/postsController')

const router = express.Router()

router.get('/', postListView)

module.exports = router
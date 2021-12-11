const express = require('express')
const { postListView, postCreateView, postDeleteView } = require('../controllers/postControllers')

const upload = require('../middleware/uploads')
const router = express.Router()

router.get('/', postListView)

router.post('/create', postCreateView)

router.delete('/delete/:postID', postDeleteView)

module.exports = router
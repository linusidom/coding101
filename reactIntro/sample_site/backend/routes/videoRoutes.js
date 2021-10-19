const express = require('express')
const { videoListView, videoCreateView } = require('../controllers/videoController')
const router = express.Router()

router.get('/get', videoListView)
router.post('/create', videoCreateView)

module.exports = router
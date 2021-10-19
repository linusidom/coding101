const express = require('express')
const {practiceCreateDocs, practiceQueryDocs} = require('../controllers/practiceController')
const router = express.Router()

// router.get('/', postTestGet)
// router.post('/', postCreateView)

router.route('/').get(practiceQueryDocs).post(practiceCreateDocs)

module.exports = router
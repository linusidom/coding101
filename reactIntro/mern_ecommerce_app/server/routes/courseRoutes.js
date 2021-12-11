const express = require('express')
const { courseListView, courseCreateView, courseDetailView, courseUpdateView, courseDeleteView } = require('../controllers/courseControllers')

const protect = require('../middleware/protect')
const router = express.Router()

router.get('/courseList', courseListView)
router.post('/courseCreate', protect, courseCreateView)
router.get('/courseDetail/:courseID', courseDetailView)
router.put('/courseUpdate/:courseID', protect, courseUpdateView)
router.delete('/courseDelete/:courseID', protect, courseDeleteView)

module.exports = router
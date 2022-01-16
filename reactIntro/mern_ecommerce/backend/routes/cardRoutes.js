const express = require('express')
const { cardCreateView, cardChargeView, cardDeleteView } = require('../controllers/cardControllers')
const { loginRequired } = require('../middleware/authMiddleware')
const router = express.Router()


router.post('/create', loginRequired, cardCreateView)
router.post('/charge', loginRequired, cardChargeView)
router.put('/delete', loginRequired, cardDeleteView)

module.exports = router
const express = require('express')
const { orderCreateView, orderListView } = require('../controllers/orderControllers')

const { loginRequired, isAdmin } = require('../middleware/authMiddleware')
const router = express.Router()


router.post('/create', loginRequired, orderCreateView)
router.get('/list', loginRequired, isAdmin, orderListView)


module.exports = router
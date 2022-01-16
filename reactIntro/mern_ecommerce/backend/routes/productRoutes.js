const express = require('express')
const { productListView, productCreateView, productDetailView } = require('../controllers/productControllers')
const { loginRequired, isAdmin } = require('../middleware/authMiddleware')
const router = express.Router()


router.route('/').get(productListView).post(loginRequired, isAdmin, productCreateView)
router.route('/:productID').get(loginRequired, productDetailView)

module.exports = router
const express = require('express')
const router = express.Router()
const {productCreateView, productQueryView} = require('../controllers/productController')

router.get('/', productQueryView)
router.post('/', productCreateView)

module.exports = router
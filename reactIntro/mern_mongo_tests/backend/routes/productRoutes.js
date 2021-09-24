const express = require('express')
const router = express.Router()
const {productCreateView, productQueryView, productDeleteView} = require('../controllers/productController')

router.get('/', productQueryView)
router.post('/', productCreateView)
router.delete('/:id', productDeleteView)
module.exports = router
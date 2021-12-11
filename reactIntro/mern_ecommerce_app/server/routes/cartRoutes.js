const express = require('express')
const { cartDetailView, cartAddView, cartRemoveView, cartListView, cartDeleteView } = require('../controllers/cartController')
const cartGetOrCreate = require('../middleware/cart')
const protect = require('../middleware/protect')
const router = express.Router()

router.get('/cart', cartDetailView)
router.put('/addToCart', cartGetOrCreate, cartAddView)
router.put('/removeFromCart', cartGetOrCreate, cartRemoveView)

// Temp
router.get('/cartList', cartListView)
router.delete('/cartDelete/:cartID', cartDeleteView)

module.exports = router
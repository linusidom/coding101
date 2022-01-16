const express = require('express')
const { cartGetView, cartAddView, cartRemoveView } = require('../controllers/cartControllers')
const { cartGetOrCreate } = require('../middleware/cart')
const router = express.Router()


router.get('/getCart', cartGetOrCreate ,cartGetView)
router.post('/addToCart',cartGetOrCreate, cartAddView)
router.post('/removeFromCart', cartGetOrCreate, cartRemoveView)

module.exports = router
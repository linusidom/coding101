const express = require('express')
const { restaurantListView, reviewCreateView, reviewUpdateView, reviewDeleteView, restaurantDetailView, cuisineListView} = require('../controllers/restaurantControllers')
const router = express.Router()


router.get('/cuisines', cuisineListView)
router.get('/detail/:restaurantID', restaurantDetailView)
router.route('/review').post(reviewCreateView).put(reviewUpdateView).delete(reviewDeleteView)
router.get('/', restaurantListView)

module.exports = router
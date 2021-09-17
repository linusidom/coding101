const express = require('express')
const { listView, createView, updateView, deleteView } = require('../controllers/appController')


// We're going to use the Router module from Express

// The router module segregates information

// The app module is a global wrapper
const router = express.Router()

// Local urls file and this combines the view in the response
// router.get('/', listView)

// router.post('/', createView)

// router.put('/', updateView)

router.route('/').get(listView).post(createView).put(updateView).delete(deleteView)

// export default router
module.exports = router
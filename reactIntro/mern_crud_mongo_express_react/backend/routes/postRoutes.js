const express = require('express')
const { postTestGet, postCreateView, postListView, postDeleteView, postUpdateView } = require('../controllers/postController')
const router = express.Router()

// router.get('/', postTestGet)
// router.post('/', postCreateView)

router.route('/').get(postListView).post(postCreateView)

router.route('/:id').delete(postDeleteView).put(postUpdateView)


module.exports = router


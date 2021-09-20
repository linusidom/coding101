const express = require('express')
const {postListView, postCreateView, postDetailView, postUpdateView, postDeleteView }= require('../controllers/postController')

const router = express.Router()


// Get all Documents in a collection
router.get('/', postListView)
router.post('/create', postCreateView)

// router.get('/:id', postDetailView)
// router.put('/:id', postUpdateView)
// router.delete('/:id', postDeleteView)

router.route('/:id').get(postDetailView).put(postUpdateView).delete(postDeleteView)

module.exports = router
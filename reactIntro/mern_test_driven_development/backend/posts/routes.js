const express = require('express')
const router = express.Router()
const {postListView, postCreateView, postDetailView, postUpdateView, postDeleteView} = require('./controller')

router.route('/').get(postListView).post(postCreateView)
router.route('/:postID').get(postDetailView).put(postUpdateView).delete(postDeleteView)

module.exports = router
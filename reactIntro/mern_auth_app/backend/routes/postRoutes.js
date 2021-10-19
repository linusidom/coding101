const express = require('express')
const {postListView, postDetailView, postUpdateView, postDeleteView, commentDeleteView, commentCreateView, postCreateView} = require('../controllers/postController')
const protect = require('../middleware/userProtect')
const router = express.Router()


// Comments
router.route('/:postID/comments/:commentID').put(commentDeleteView)
router.route('/:id/comments').put(commentCreateView)

// Posts
router.route('/:id').get(postDetailView).put(postUpdateView).delete(postDeleteView)
router.route('/').get(postListView).post(postCreateView)

module.exports = router
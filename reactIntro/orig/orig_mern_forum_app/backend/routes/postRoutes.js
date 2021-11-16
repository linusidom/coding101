const express = require('express')
const { postTestView, postListView, postCreateView, postDetailView, postUpdateView, postDeleteView, commentCreateView, commentDeleteView } = require('../controllers/postController')
const protect = require('../middleware/protect')
const router = express.Router()


router.route('/').get(postListView).post(protect, postCreateView)

router.route('/:id').get(protect, postDetailView).put(protect, postUpdateView).delete(protect, postDeleteView)

// Comments
router.route('/:postID/comments').put(protect, commentCreateView)
router.route('/:postID/comments/:commentID').put(protect, commentDeleteView)

module.exports = router
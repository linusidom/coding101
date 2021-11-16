const express = require('express')
const { postListView, postCreateView, postDetailView, postUpdateView, postDeleteView, commentCreateView, commentDeleteView } = require('../controllers/postControllers')
const protect = require('../middleware/protect')
const router = express.Router()


// comments
router.route('/:postID/comments/:commentID').put(protect, commentDeleteView)
router.route("/:postID/comments").put(protect, commentCreateView)

router.route('/:postID').get(postDetailView).put(protect, postUpdateView).delete(protect, postDeleteView)

router.route('/').get(postListView).post(protect, postCreateView)


module.exports = router
const express = require('express')
const {postCreateView, postListView, postDetailView, postDeleteView, commentCreateView, commentDeleteView} = require('../controllers/postController')

const router = express.Router()

// Default route within the /posts route
// router.route('/').get(postCheckView)

// Most specific at the top


router.route('/:postID/comments/:commentID').put(commentDeleteView)

// Comments Create Route
router.route('/:postID/comments').put(commentCreateView)

// Posts
router.route('/:postID').get(postDetailView).delete(postDeleteView)
router.route('/').post(postCreateView).get(postListView)



module.exports = router
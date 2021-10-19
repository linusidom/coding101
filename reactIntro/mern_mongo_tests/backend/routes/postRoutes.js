const express = require('express')
const { postCreateView, postListView, postDeleteView, postUpdateView, postDetailView, postAddCommentView, postDeleteCommentView } = require('../controllers/postController')
const router = express.Router()

// router.get('/', postTestGet)
// router.post('/', postCreateView)

router.route('/').get(postListView).post(postCreateView)

router.route('/:id').delete(postDeleteView).put(postUpdateView).get(postDetailView)


module.exports = router
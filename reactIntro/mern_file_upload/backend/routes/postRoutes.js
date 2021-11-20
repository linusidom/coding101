const express = require('express')
const { postListView, postCreateOneView, postDeleteView, postCreateMultipleView, postCreatePDFView } = require('../controllers/postController')

const upload = require('../middleware/uploads')
const router = express.Router()

router.get('/', postListView)

router.post('/createOne', postCreateOneView)
router.post('/createMultiple', postCreateMultipleView)
router.post('/createPDF', postCreatePDFView)

router.delete('/delete/:postID', postDeleteView)

module.exports = router
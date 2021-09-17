const express = require('express')
const {getKittens, createKittens} = require('../controllers/kittenController')

const router = express.Router()

router.get('/', getKittens)
router.post('/', createKittens)

module.exports = router
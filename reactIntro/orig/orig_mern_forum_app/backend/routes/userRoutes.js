const express = require('express')
const { userTestView, userLoginView, userRegisterView, userVerifyView, userPasswordResetReqestView, userPasswordResetFormView, userPasswordChangeView, userMemberView, userFollowView, userUnFollowView } = require('../controllers/userController')
const protect = require('../middleware/protect')
const router = express.Router()

router.post('/follow', protect, userFollowView)
router.post('/register', userRegisterView)
router.post('/login', userLoginView)
router.get('/verify', protect, userVerifyView)
router.post('/passwordResetRequest', userPasswordResetReqestView)
router.post('/passwordResetForm', userPasswordResetFormView)
router.post('/passwordChangeForm', protect, userPasswordChangeView)
router.get('/members', protect, userMemberView)

router.post('/unfollow', protect, userUnFollowView)
module.exports = router
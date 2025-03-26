const { Router } = require('express');
const authController = require('./auth.controller');
const authorization = require('../../commons/guard/authorization.guard');

const router = Router();

router.post('/send-otp', authController.sendOTP)
router.post('/check-otp', authController.checkOTP)
router.get('/logout', authorization, authController.logout)

module.exports = {
  authRoutes: router
}

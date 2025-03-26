const { Router } = require('express');
const userController = require('./user.controller');
const authorization = require('../../commons/guard/authorization.guard');

const router = Router();

router.get('/whoami', authorization, userController.whoami)

module.exports = {
  userRoutes: router
}

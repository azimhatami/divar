const { UserMessages } = require('./user.messages');
const userService = require('./user.service');
const autoBind = require('auto-bind');
const NodeEnv = require('../../commons/constant/env.enum');

class UserController {
  #service;
  constructor() {
    autoBind(this)
    this.#service = userService;
  }

  async whoami(req, res, next) {
    try {
      const user = req.user;
      return res.json(user)
    } catch (error) {
      next(error)
    }
  }

}


module.exports = new UserController()

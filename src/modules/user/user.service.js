const autoBind = require('auto-bind');
const userModel = require('../user/user.model');
const createHttpError = require('http-errors');
const jwt = require('jsonwebtoken');

const { randomInt } = require("crypto");
const { UserMessages } = require('./user.messages');


class UserService {
  #model;
  constructor() {
    autoBind(this)
    this.#model = userModel
  }

}

module.exports = new UserService()

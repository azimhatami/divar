const OptionMsg = require('./option.messages');
const optionService = require('./option.service');
const autoBind = require('auto-bind');

class OptionController {
  #service;
  constructor() {
    autoBind(this)
    this.#service = optionService;
  }

  async create(req, res, next) {
    try {
    } catch (error) {
      next(error)
    }
  }

  async findByCategoryId(req, res, next) {
    try {
    } catch (error) {
      next(error)
    }
  }

  async findById(req, res, next) {
    try {
    } catch (error) {
      next(error)
    }
  }

  async find(req, res, next) {
    try {
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new OptionController()

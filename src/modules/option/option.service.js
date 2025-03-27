const OptionModel = require('./option.model');
const autoBind = require('auto-bind');
const createHttpError = require('http-errors');
const OptionMsg = require('./option.messages');


class OptionService {
  #model;
  constructor() {
    autoBind(this)
    this.#model = OptionModel;
  }

  async find() {
  }

  async create(categoryDto) {
  }

  async checkExistById(id) {
  }
}


module.exports = new OptionService()

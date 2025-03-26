const CategoryModel = require('./category.model');
const autoBind = require('auto-bind');

class CategoryService {
  #model;
  constructor() {
    autoBind(this)
    this.#model = CategoryModel;
  }

  async create(categoryDto) {
  }
}


module.exports = new CategoryService()

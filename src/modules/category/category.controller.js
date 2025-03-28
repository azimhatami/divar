const CategoryMsg = require('./category.messages');
const categoryService = require('./category.service');
const autoBind = require('auto-bind');

class CategoryController {
  #service;
  constructor() {
    autoBind(this)
    this.#service = categoryService;
  }

  async create(req, res, next) {
    try {
      const { name, slug, icon, parent } = req.body;
      await this.#service.create({ name, slug, icon, parent })
      return res.status(201).json({
        message: CategoryMsg.created
      })
    } catch (error) {
      next(error)
    }
  }

  async find(req, res, next) {
    try {
      const categories = await this.#service.find()
      return res.json(categories)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      const { id } = req.params;
      const categories = await this.#service.remove(id)
      return res.json({
        message: CategoryMsg.deleted
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new CategoryController()

const CategoryModel = require('./category.model');
const autoBind = require('auto-bind');
const createHttpError = require('http-errors');
const CategoryMsg = require('./category.messages');
const slugify = require('slugify');

const { Types, isValidObjectId } = require('mongoose');

class CategoryService {
  #model;
  constructor() {
    autoBind(this)
    this.#model = CategoryModel;
  }

  async find() {
    return await this.#model.find({parent: {$exists: false}});
  }

  async create(categoryDto) {
    if(categoryDto?.parent && isValidObjectId(categoryDto.parent)) {
      const existCategory = await this.checkExistById(categoryDto.parent);

      categoryDto.parent = existCategory._id

      categoryDto.parents = [
        ... new Set(
          ([existCategory._id.toString()].concat(
            existCategory.parents.map(id => id.toString())
          )).map(id => new Types.ObjectId(id))
        )
      ]
    }

    if (categoryDto?.slug) {
      categoryDto.slug = slugify(categoryDto.slug)
      await this.alreadyExistBySlug(categoryDto.slug)
    } else {
      categoryDto.slug = slugify(categoryDto.name)
    }

    const category = await this.#model.create(categoryDto);
    return category;
  }

  async checkExistById(id) {
    const category = await this.#model.findById(id);
    if (!category) throw new createHttpError.NotFound(CategoryMsg.notfound)
    return category;
  }

  async checkExistBySlug(slug) {
    const category = await this.#model.findOne({slug});
    if (!category) throw new createHttpError.NotFound();
    return category;
  }

  async alreadyExistBySlug(slug) {
    const category = await this.#model.findOne({slug});
    if (category) throw new createHttpError.Conflict(CategoryMsg.alreadyexist);

    return null
  }
}


module.exports = new CategoryService()

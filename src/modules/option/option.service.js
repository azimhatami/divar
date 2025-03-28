const OptionModel = require('./option.model');
const CategoryModel = require('../category/category.model');
const autoBind = require('auto-bind');
const createHttpError = require('http-errors');
const OptionMsg = require('./option.messages');
const slugify = require('slugify')


class OptionService {
  #model;
  #categoryModel;
  constructor() {
    autoBind(this)
    this.#model = OptionModel;
    this.#categoryModel = CategoryModel;
  }

  async find() {
    const options = await this.#model.find(
      {}, {__v: 0}, {sort: {_id: -1}}
    ).populate(
        [{path: 'category', select: {name: 1, slug: 1}}]
      );
    return options;
  }

  async create(optionDto) {
    const category = await this.checkExistById(optionDto.category);
    optionDto.category = category._id
    optionDto.key = slugify(optionDto.key, {trim: true, replacement: '_', lower: true});

    await this.alreadyExistByCategoryAndKey(optionDto.key, category._id)

    if (optionDto?.enum && typeof optionDto.enum === 'string') {
      optionDto.enum = optionDto.enum.split(',')
    } else if (!Array.isArray(optionDto.enum)) optionDto.enum = [];

    const option = await this.#model.create(optionDto)
    return option;
     
  }

  async findById(id) {
    return await this.checkExistById(id);
  }

  async findByCategoryId(category) {
    return await this.#model.find({category}, {__v: 0}).populate(
        [{path: 'category', select: {name: 1, slug: 1}}]
      );
  }

  async findByCategorySlug(slug) {
    const options = await this.#model.aggregate([
      {
        $lookup: {
          from: 'categories',
          localField: 'category',
          foreignField: '_id',
          as: 'category'
        }
      },
      {
        $unwind: '$category'
      },
      {
        $addFields: {
          categorySlug: '$category.slug',
          categoryName: '$category.name',
          categoryIcon: '$category.icon',
        }
      },
      {
        $project: {
          category: 0,
          __v: 0
        }
      },
      {
        $match: {
          categorySlug: slug
        }
      }
    ]);

    return options;
  }

  async checkExistById(id) {
    const option = await this.#model.findById(id);
    if (!option) throw new createHttpError.NotFound(OptionMsg.notfound)
    return option;
  }

  async alreadyExistByCategoryAndKey(key, category) {
    const isExist = await this.#model.findOne({category, key});
    if (isExist) throw new createHttpError.Conflict(OptionMsg.alreadyexist)
    return null
  }
}


module.exports = new OptionService()

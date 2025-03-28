const categoryController = require('./category.controller');

const { Router } = require('express');


const router = Router();
router.post('/', categoryController.create)
router.get('/', categoryController.find)
router.delete('/:id', categoryController.remove)


module.exports = {
  categoryRoutes: router
}

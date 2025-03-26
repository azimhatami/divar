/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Manage product/content categories hierarchy
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *         - icon
 *       properties:
 *         name:
 *           type: string
 *           example: "Electronics"
 *         slug:
 *           type: string
 *           example: "electronics"
 *         icon:
 *           type: string
 *           example: "microchip"
 *         parent:
 *           type: string
 *           format: objectId
 *           example: "64d21f9a5f1b2c3e4f5a6b7c"
 */

/**
 * @swagger
 * /category:
 *   post:
 *     summary: Create new category
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Category created successfully
 */

/**
 * @swagger
 * /category:
 *   get:
 *     summary: Get all categories
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: List of categories
 */

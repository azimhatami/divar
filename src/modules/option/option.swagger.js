/**
 * @swagger
 * tags:
 *   name: Option
 *   description: Option Module and Routes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Option:
 *       type: object
 *       required:
 *         - title
 *         - key
 *         - type
 *         - category
 *       properties:
 *         title:
 *           type: string
 *         key:
 *           type: string
 *         guid:
 *           type: string
 *         category:
 *           type: string
 *         type:
 *           type: string
 *           enum:
 *             - number
 *             - string
 *             - array
 *             - boolean
 *         enum:
 *           type: array
 *           items:
 *             type: string
 *           
 */

/**
 * @swagger
 * /option:
 *   post:
 *     summary: Create new option for category
 *     tags: [Option]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Option'
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/Option'
 *     responses:
 *       201:
 *         description: Option created successfully
 */

/**
 * @swagger
 * /option/{categoryId}:
 *   get:
 *     summary: Get all options of category
 *     tags: [Option]
 *     parameters:
 *       - in: path
 *       - name: categoryId
 *       - type: string
 *     responses:
 *       200:
 *         description: List of options
 */

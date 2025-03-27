/**
 * @swagger
 * tags:
 *   name: Options
 *   description: Management of category options in the system
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
 *           description: Display name of the option
 *           example: "Product Color"
 *         key:
 *           type: string
 *           description: Unique key for option identification
 *           example: "color"
 *         guid:
 *           type: string
 *           description: Globally unique identifier for the option
 *           example: "550e8400-e29b-41d4-a716-446655440000"
 *         category:
 *           type: string
 *           format: objectid
 *           description: Associated category ID
 *           example: "507f1f77bcf86cd799439011"
 *         type:
 *           type: string
 *           enum:
 *             - number
 *             - string
 *             - array
 *             - boolean
 *           description: Data type of the option
 *           example: "string"
 *         enum:
 *           type: array
 *           items:
 *             type: string
 *           description: Allowed values for enum-type options
 *           example: ["Red", "Blue", "Green"]
 */

/**
 * @swagger
 * /option:
 *   post:
 *     summary: Create a new category option
 *     description: Endpoint for creating new options in the system
 *     tags: [Options]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Option'
 *           example:
 *             title: "Product Size"
 *             key: "size"
 *             type: "array"
 *             category: "507f1f77bcf86cd799439011"
 *             enum: ["S", "M", "L", "XL"]
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/Option'
 *     responses:
 *       201:
 *         description: Option created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Option'
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /option/by-category/{categoryId}:
 *   get:
 *     summary: Get all options for a category
 *     description: Retrieve all options associated with a specific category
 *     tags: [Options]
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         schema:
 *           type: string
 *         required: true
 *         description: Category ID
 *         example: "507f1f77bcf86cd799439011"
 *     responses:
 *       200:
 *         description: List of category options
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Option'
 *       404:
 *         description: Category not found
 */

/**
 * @swagger
 * /option/{id}:
 *   get:
 *     summary: Get option details
 *     description: Retrieve complete information of a specific option
 *     tags: [Options]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Option ID
 *         example: "550e8400-e29b-41d4-a716-446655440000"
 *     responses:
 *       200:
 *         description: Option details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Option'
 *       404:
 *         description: Option not found
 */

/**
 * @swagger
 * /option:
 *   get:
 *     summary: List all options
 *     description: Retrieve all system options with filtering and pagination
 *     tags: [Options]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Items per page
 *     responses:
 *       200:
 *         description: List of system options
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: integer
 *                   description: Total number of options
 *                 pages:
 *                   type: integer
 *                   description: Total number of pages
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Option'
 */

/**
 * @swagger
 * tags:
 *  name: User
 *  description: User module and routes
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    SendOTP:
 *      type: object
 *      required:
 *        - mobile
 *      properties:
 *        mobile:
 *          type: string
 *          example: 09XXXXXXXXX
 *    CheckOTP:
 *      type: object
 *      required:
 *        - mobile
 *        - code
 *      properties:
 *        mobile:
 *          type: string
 *          example: 09XXXXXXXXX
 *        code:
 *          type: string
 *          example: XXXXX
 */


/**
 * @swagger
 * 
 * /user/whoami:
 *  get:
 *    summary: get user profile
 *    tags:
 *      - User
 *    responses:
 *      200:
 *        description: get user successfully
 */


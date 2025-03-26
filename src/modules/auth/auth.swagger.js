/**
 * @swagger
 * tags:
 *  name: Authentication
 *  description: User authentication and authorization
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
 * /auth/send-otp:
 *  post:
 *    summary: Login with OTP
 *    tags:
 *      - Authentication
 *    requestBody:
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            $ref: '#/components/schemas/SendOTP'
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/SendOTP'
 *    responses:
 *      200:
 *        description: OTP sent successfully
 */

/**
 * @swagger
 * 
 * /auth/check-otp:
 *  post:
 *    summary: Verify OTP for user login
 *    tags:
 *      - Authentication
 *    requestBody:
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            $ref: '#/components/schemas/CheckOTP'
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CheckOTP'
 *    responses:
 *      200:
 *        description: OTP verified successfully. Login approved
 */

/**
 * @swagger
 * 
 * /auth/logout:
 *  get:
 *    summary: Log out the current user
 *    tags:
 *      - Authentication
 *    responses:
 *      200:
 *        description: Successfully logged out.
 */

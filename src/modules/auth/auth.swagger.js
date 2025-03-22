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

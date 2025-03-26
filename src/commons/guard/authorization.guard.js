const createHttpError = require('http-errors');
const authorizationMSG = require('../messages/auth.message');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const userModel = require('../../modules/user/user.model');


const authorization = async (req, res, next) => {
  try {
    const token = req?.cookies?.access_token;
    if (!token) {
      throw new createHttpError.Unauthorized(authorizationMSG.Login)
    }

    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (typeof data === 'object' && 'id' in data) {
      const user = await userModel.findById(data.id, {accessToken: 0, otp: 0, updatedAt: 0, __v: 0, verifiedMobile: 0}).lean();
      if (!user) throw new createHttpError.Unauthorized(authorizationMSG.NotFoundAccount)
      req.user = user;
      return next();
    }
    throw new createHttpError.Unauthorized(authorizationMSG.InvalidToken)
  } catch (error) {
    next(error)
  }
};


module.exports = authorization;

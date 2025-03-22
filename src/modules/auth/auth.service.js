const autoBind = require('auto-bind');
const userModel = require('../user/user.model');
const createHttpError = require('http-errors');

const { randomInt } = require("crypto");
const { AuthMessages } = require('./auth.messages');


class AuthService {
  #model;
  constructor() {
    autoBind(this)
    this.#model = userModel
  }

  async sendOTP(mobile) {
    const user = await this.#model.findOne({mobile})
    const now = new Date().getTime();
    const otp = {
      code: randomInt(10000, 9999),
      expiresIn: now + (1000 * 60 * 2),
    }

    if (!user) {
      const newUser = await this.#model.create({
        mobile,
        otp,
      });

      return newUser;
    }

    if (user.otp && user.otp.expiresIn > now) {
      throw new createHttpError.BadRequest(AuthMessages.OtpCodeNotExpired)
    }
    user.otp = otp;
    await user.save()
    return user;
  }

  async checkOTP(mobile, code) {
  }

  async checkExistByMobile(mobile) {
    const user = await this.#model.findOne({mobile})
    if(!user) throw new createHttpError.NotFound(AuthMessages.NotFound)
    return user
  }
}

module.exports = new AuthService()

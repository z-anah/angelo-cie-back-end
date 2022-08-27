const Joi = require("joi");
const validatorHandler = require("../middlewares/validatorHandler");

const signup = (req, res, next) => {
  const schema = Joi.object().keys({
    firstname: Joi.string().trim().min(3).max(50).required(),
    lastname: Joi.string().trim().min(3).max(50).required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(6).required(),
  });
  validatorHandler(req, res, next, schema);
};

const signin = (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(6).required(),
  });
  validatorHandler(req, res, next, schema);
};

module.exports = {
  signup,
  signin,
};

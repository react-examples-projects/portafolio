const Joi = require("joi");

const loginShemaValidator = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = { loginShemaValidator };

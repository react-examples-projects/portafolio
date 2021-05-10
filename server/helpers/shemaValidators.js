const Joi = require("joi");

const loginShemaValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const projectCreateShemaValidator = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  github: Joi.string().uri().required(),
  link: Joi.string().uri().required(),
  technologies: Joi.alternatives().try(
    Joi.string().required(),
    Joi.array().required()
  ),
});

module.exports = { loginShemaValidator, projectCreateShemaValidator };

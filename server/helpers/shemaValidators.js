const Joi = require("joi");

const loginShemaValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const projectCreateShemaValidator = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  github: Joi.string().uri(),
  link: Joi.string().uri(),
  technologies: Joi.alternatives().try(
    Joi.string().required(),
    Joi.array().required()
  ),
  image: Joi.string(),
});

const projectDeleteShemaValidor = Joi.object({
  id: Joi.string().required(),
});

module.exports = {
  loginShemaValidator,
  projectCreateShemaValidator,
  projectDeleteShemaValidor,
};

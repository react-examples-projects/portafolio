const Joi = require("joi");

const loginShemaValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const projectCreateShemaValidator = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  github: Joi.string().uri().optional(),
  link: Joi.string().uri().optional(),
  technologies: Joi.alternatives().try(
    Joi.string().required(),
    Joi.array().required()
  ),
  image: Joi.string().optional(),
});

const projectUpdateShemaValidator = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  github: Joi.string().uri().optional(),
  link: Joi.string().uri().optional(),
  technologies: Joi.alternatives()
    .try(Joi.string().required(), Joi.array().required())
    .optional(),
  image: Joi.string().optional(),
});

const projectDeleteShemaValidor = Joi.object({
  id: Joi.string().required(),
});

module.exports = {
  loginShemaValidator,
  projectCreateShemaValidator,
  projectUpdateShemaValidator,
  projectDeleteShemaValidor,
};

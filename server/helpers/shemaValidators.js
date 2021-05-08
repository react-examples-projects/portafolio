const Joi = require("joi");
const id = Joi.string()
  .regex(/^[0-9a-fA-F]{24}$/)
  .required();
const idFormat = Joi.object({ id });

const imageSchemaValidator = Joi.object({
  "files[]": Joi.alternatives().try(
    Joi.string().required(),
    Joi.array().required()
  ),
});

const imageDeleteSchemaValidor = idFormat;
const imageUpdateSchemaValidor = idFormat;
const imageGetSchemaValidor = idFormat;

const commentGetSchemaValidor = idFormat;
const commentDeleteSchemaValidor = idFormat;
const commentDeleteAllSchemaValidor = idFormat;
const commentUpdateAllSchemaValidor = idFormat;
const commentPostShemaValidator = Joi.object({
  id_post: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
  username: Joi.string().required(),
  content: Joi.string().required(),
});

module.exports = {
  // images
  imageSchemaValidator,
  imageDeleteSchemaValidor,
  imageUpdateSchemaValidor,
  imageGetSchemaValidor,
  // comments
  commentPostShemaValidator,
  commentGetSchemaValidor,
  commentDeleteSchemaValidor,
  commentDeleteAllSchemaValidor,
  commentUpdateAllSchemaValidor,
};

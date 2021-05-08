function validate(data, schema) {
  const { error } = schema.validate(data);
  return error;
}

function validation(schema, check = "body") {
  return (req, res, next) => {
    const error = validate(req[check], schema);
    error ? next(new Error(error)) : next();
  };
}
module.exports = validation;

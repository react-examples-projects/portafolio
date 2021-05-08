const { Schema, model } = require("mongoose");

const UsertModel = new Schema({
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  is_admin: { type: Boolean, default: false },
});

module.exports = model("User", UsertModel);

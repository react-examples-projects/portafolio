const { Schema, model } = require("mongoose");

const ProjectModel = new Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  github: { type: String, trim: true },
  link: { type: String, trim: true },
  technologies: { type: Array, required: true },
  date: { type: String, default: new Date().toLocaleDateString() },
});

module.exports = model("Project", ProjectModel);

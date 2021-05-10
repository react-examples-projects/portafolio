const ProjectModel = require("../models/Project.js");

async function createProject(payload) {
   console.log(payload)
  const project = new ProjectModel(payload);
  const data = await project.save();
  return data;
}

module.exports = { createProject };

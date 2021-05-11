const ProjectModel = require("../models/Project.js");

async function createProject(payload) {
  const project = new ProjectModel(payload);
  const data = await project.save();
  return data;
}

async function getProjects(){
  const projects = await ProjectModel.find({}).lean();
  return projects;
}

module.exports = { createProject, getProjects };

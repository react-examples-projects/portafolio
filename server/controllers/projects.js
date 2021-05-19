const ProjectModel = require("../models/Project.js");

async function createProject(payload) {
  const project = new ProjectModel(payload);
  const data = await project.save();
  return data;
}

async function getProjects() {
  const projects = await ProjectModel.find({}).sort({ _id: -1 }).lean();
  return projects;
}

async function deleteProject(_id) {
  const projectDeleted = await ProjectModel.deleteOne({ _id });
  return projectDeleted;
}

module.exports = { createProject, getProjects, deleteProject };

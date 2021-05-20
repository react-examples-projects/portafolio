const express = require("express");
const router = express.Router();
const { success } = require("../helpers/responses");
const validation = require("../middlewares/validationHandler");
const {
  projectCreateShemaValidator,
  projectDeleteShemaValidor,
} = require("../helpers/shemaValidators");
const {
  createProject,
  getProjects,
  deleteProject,
  updateProject,
} = require("../controllers/projects");

function projectsRouter(app) {
  app.use("/api", router);

  router.get("/projects", async (req, res) => {
    const projects = await getProjects();
    res.json(success(projects));
  });

  router.post(
    "/project",
    validation(projectCreateShemaValidator),
    async (req, res) => {
      const payload = req.body;
      const project = await createProject(payload);
      res.status(201).json(success(project, 201));
    }
  );

  router.delete(
    "/project",
    validation(projectDeleteShemaValidor, "query"),
    async (req, res) => {
      const id = req.query.id;
      const projectDeleted = await deleteProject(id);
      res.json(success(projectDeleted));
    }
  );

  router.put("/project", async (req, res) => {
    const id = req.query.id;
    const projectUpdated = await updateProject({ id, ...req.body });
    res.json(success(projectUpdated));
  });
}

module.exports = projectsRouter;

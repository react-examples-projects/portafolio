const express = require("express");
const router = express.Router();
const { success } = require("../helpers/responses");
const validation = require("../middlewares/validationHandler");
const { projectCreateShemaValidator } = require("../helpers/shemaValidators");
const { createProject } = require("../controllers/projects");
function projectsRouter(app) {
  app.use("/api", router);

  router.post(
    "/project",
    validation(projectCreateShemaValidator),
    async (req, res) => {
      const payload = req.body;
      const project = await createProject(payload);
      res.json(success(project, 201));
    }
  );
}

module.exports = projectsRouter;

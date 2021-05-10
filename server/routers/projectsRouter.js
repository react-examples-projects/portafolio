const express = require("express");
const router = express.Router();
const { success } = require("../helpers/responses");
const validation = require("../middlewares/validationHandler");
const { projectCreateShemaValidator } = require("../helpers/shemaValidators");

function projectsRouter(app) {
  app.use("/api", router);

  router.post(
    "/project",
    validation(projectCreateShemaValidator),
    async (req, res) => {
      const payload = req.body;
      console.log(payload);
      res.json(success(payload));
    }
  );
}

module.exports = projectsRouter;

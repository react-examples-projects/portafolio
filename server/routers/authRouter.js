const express = require("express");
const router = express.Router();
const { success } = require("../helpers/responses");
const { errorRouterHandler } = require("../middlewares/errorsHandling");
const validation = require("../middlewares/validationHandler");
const { loginShemaValidator } = require("../helpers/shemaValidators");
const { existsUser } = require("../controllers/user");

function authRouter(app) {
  app.use("/api", router);
  app.use("/api", errorRouterHandler);

  // To validate the payload body to save in the database

  router.post(
    "/login",
    validation(loginShemaValidator),
    async (req, res, next) => {
      const { email, password } = req.body;
      try {
        const user = await existsUser(email, password);
        res.json(success(user));
        
      } catch (err) {
        next({
          errClient: "An error occurred while login the user",
          errLog: err,
        });
      }
    }
  );
}

module.exports = authRouter;

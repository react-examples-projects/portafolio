const express = require("express");
const router = express.Router();
const { success, error } = require("../helpers/responses");
const validation = require("../middlewares/validationHandler");
const { loginShemaValidator } = require("../helpers/shemaValidators");
const { existsUser } = require("../controllers/user");
const { verifyToken } = require("../helpers/jwt");

function authRouter(app) {
  app.use("/api", router);

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

  router.get("/verify-token", async (req, res) => {
    const auth = req.headers.authorization;
    if (!auth) {
      return res.json(
        error({
          isValid: false,
        })
      );
    }
    const [, token] = auth.split(" ");
    const isValid = await verifyToken(token);
    return res.json(success({ isValid }));
  });
}

module.exports = authRouter;

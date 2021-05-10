const express = require("express");
const router = express.Router();
const { success } = require("../helpers/responses");
const { getContentToken } = require("../helpers/jwt");

function userRouter(app) {
  app.use("/api", router);

  router.get("/user", async (req, res) => {
    const token = req.query.token;
    const userInfo = await getContentToken(token);

    res.json(
      success({
        user: userInfo,
      })
    );
  });
}

module.exports = userRouter;

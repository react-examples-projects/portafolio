const express = require("express");
const router = express.Router();
const { success } = require("../helpers/responses");
const {
  saveFilesDatabase,
  getImagesDatabase,
  deleteImageDatabase,
  editTitleImage,
  getPostById,
  likePost,
  dislikePost,
} = require("../controllers/images");
const {
  imageSchemaValidator,
  imageDeleteSchemaValidor,
  imageUpdateSchemaValidor,
  imageGetSchemaValidor,
} = require("../helpers/shemaValidators");
const { errorRouterHandler } = require("../middlewares/errorsHandling");
const validation = require("../middlewares/validationHandler");

function imagePostsRouter(app) {
  app.use("/api/posts", router);
  app.use("/api/posts", errorRouterHandler);

  // To validate the payload body to save in the database
  router.post("/", validation(imageSchemaValidator), async (req, res, next) => {
    const files = req.body["files[]"];
    try {
      const saved = await saveFilesDatabase(files);
      res.status(201);
      res.json(success(saved, 201));
    } catch (err) {
      next({
        errClient: "An error occurred while creating the posts",
        errLog: err,
      });
    }
  });

  router.get("/", async (req, res, next) => {
    try {
      const images = await getImagesDatabase();
      res.json(success(images));
    } catch (err) {
      next({
        errClient: "An error occurred while getting the posts",
        errLog: err,
      });
    }
  });

  router.delete(
    "/:id",
    validation(imageDeleteSchemaValidor, "params"),
    async (req, res, next) => {
      try {
        const id = req.params.id;
        const data = await deleteImageDatabase(id);
        res.json(success({ id, ...data }));
      } catch (err) {
        next({
          errClient: "An error occurred while deleting the post",
          errLog: err,
        });
      }
    }
  );

  router.put(
    "/:id",
    validation(imageUpdateSchemaValidor, "params"),
    async (req, res, next) => {
      try {
        const id = req.params.id;
        const { title } = req.body;
        const data = await editTitleImage(id, title);
        res.json(success({ id, ...data }));
      } catch (err) {
        next({
          errClient: "An error occurred while editing the post",
          errLog: err,
        });
      }
    }
  );

  router.get(
    "/:id",
    validation(imageGetSchemaValidor, "params"),
    async (req, res, next) => {
      try {
        const id = req.params.id;
        const data = await getPostById(id);
        res.json(success(data));
      } catch (err) {
        next({
          errClient: "An error occurred while finding the post",
          errLog: err,
        });
      }
    }
  );

  router.post("/like/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const image = await likePost(id);
      res.json(success(image));
    } catch (err) {
      next({
        errClient: "An error occurred while like the post",
        errLog: err,
      });
    }
  });

  router.post("/dislike/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const image = await dislikePost(id);
      res.json(success(image));
    } catch (err) {
      next({
        errClient: "An error occurred while dislike the post",
        errLog: err,
      });
    }
  });
}

module.exports = imagePostsRouter;

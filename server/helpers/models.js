const ImageModel = require("../models/Image");

function createImageModel(data) {
  const image = new ImageModel(data);
  return image;
}

async function saveImageModel(data) {
  const image = createImageModel(data);
  const saved = await image.save();
  return saved;
}

module.exports = {
  createImageModel,
  saveImageModel,
};

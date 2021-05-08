const CommentModel = require("../models/Comment");
const ImageModel = require("../models/Image");
const { removeOneComment } = require("./images");

async function getComments(id_post) {
  const comments = await CommentModel.find({ id_post });
  return comments;
}

async function deleteComment(id, id_post) {
  await removeOneComment(id_post);
  const data = await CommentModel.deleteOne({ _id: id });
  return data;
}

async function deleteAllCommentsInPost(id_post) {
  const data = await CommentModel.deleteMany({ id_post });
  return data;
}

async function editComment(id, payload) {
  const data = await CommentModel.updateOne({ _id: id }, payload);
  return data;
}

async function createComment(payload) {

  const comment = new CommentModel(payload);
  await ImageModel.findByIdAndUpdate(payload.id_post, {
    $inc: { comments: 1 },
  });
  const data = await comment.save();
  return data;
}

async function likeComment(id) {
  const updated = await CommentModel.findByIdAndUpdate(
    { _id: id },
    { $inc: { likes: 1 } }
  );
  return { id, likes: updated.likes + 1 };
}

async function dislikeComment(id) {
  const updated = await CommentModel.findByIdAndUpdate(
    { _id: id },
    { $inc: { dislikes: 1 } }
  );
  return { id, dislikes: updated.dislikes + 1 };
}

module.exports = {
  getComments,
  deleteComment,
  editComment,
  createComment,
  deleteAllCommentsInPost,
  likeComment,
  dislikeComment,
};

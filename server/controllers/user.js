const UserModel = require("../models/User");
const { createToken } = require("../helpers/jwt");

async function existsUser(email, password) {
  let [user] = await UserModel.find({ email, password }).lean();
  if (user?._id) {
    delete user.password;
    user.token = createToken(user);
  }

  return {
    user,
    isValid: !!user?._id,
  };
}

module.exports = {
  existsUser,
};

const UserModel = require("../models/User");

async function existsUser(email, password) {
  const [user] = await UserModel.find({ email, password });
  return {
    user,
    isValid: !!user?._id,
  };
}

module.exports = {
  existsUser,
};

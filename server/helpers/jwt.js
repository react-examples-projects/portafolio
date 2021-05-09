const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/config");

function createToken(payload) {
  const token = jwt.sign(payload, JWT_KEY, {
    expiresIn: "2h",
  });
  return token;
}

async function getContentToken(token) {
  if (!token) return null;
  try {
    const isValid = await jwt.verify(token, JWT_KEY);
    return isValid;
  } catch (err) {
    console.log(err);
    return null;
  }
}

async function verifyToken(token) {
  const userInfo = await getContentToken(token);
  return !!userInfo?._id;
}

module.exports = {
  createToken,
  verifyToken,
  getContentToken,
};

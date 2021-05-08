require("dotenv").config();
const PORT = process.env.PORT || 4000;
const DB = process.env.DB;
const MONGO = require("mongoose");
const CON = MONGO.connection;

module.exports = {
  CON,
  MONGO,
  PORT,
  DB,
};

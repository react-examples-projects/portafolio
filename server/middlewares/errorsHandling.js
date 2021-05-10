const { sendError } = require("../helpers/responses");

function errorRouterHandler(err, req, res, next) {
  console.log("ERROR:", err.errLog);
  sendError(res, err.errClient);
}

function clientErrorHandler(err, req, res, next) {
  // catch errors ajax
  if (req.xhr) {
    return res.status(500).json({
      error: err.message || err,
      status: 500,
    });
  }
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log("ERROR 2:", err);
  // catch errors while streaming
  if (req.headersSent) {
    next(err);
  }
  res.status(500).json({ error: err.message || err, status: 500 });
}

module.exports = {
  errorRouterHandler,
  clientErrorHandler,
  errorHandler,
};

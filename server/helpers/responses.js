function error(error, status = 500) {
  return {
    ok: false,
    error,
    data: null,
    status,
  };
}

function success(data, status = 200) {
  return {
    ok: true,
    data,
    error: null,
    status,
  };
}

function sendError(res, err){
  res.status(500).json(error(err));
}

module.exports = { error, success, sendError };


const errorHandler = (err, req, res, next) => {
  const statusCode = err.httpStatusCode;
  console.log(statusCode)
  console.log('error codes')
  if (err.stack) {
    console.debug(err.stack);
  }

  const errorResponse = {
    error: {
      statusCode,
      message: err.message
    }
  };

  res.status(statusCode).json(errorResponse.error.message);
  next();
};

module.exports = errorHandler;

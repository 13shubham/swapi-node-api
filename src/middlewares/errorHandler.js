const winston = require('winston');


const errorHandler = (err, req, res, next) => {
  winston.error(err.message, err);
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

  res.status(500).json('Something Failed');
  next();
};

module.exports = errorHandler;

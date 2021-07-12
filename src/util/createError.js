
/*we can use this util if we require to throw our own error in any function.*/
const createError = (httpStatusCode, message) => { 
  const error = new  Error(message);
  error.httpStatusCode = httpStatusCode;
  return error;
};

module.exports = createError;

const errorHandler = (err, req, res, next) => {
  const { statusCode, message } = err;
 
  res.status(statusCode).json({ error: message });
};

module.exports = errorHandler;

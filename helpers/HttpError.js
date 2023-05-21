// class HttpError extends Error {
//   constructor(statusCode, message) {
//     super(message);
//     this.statusCode = statusCode;
//   }
// }

// module.exports = {
//   HttpError,
// };
const HttpError = (status, message) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = HttpError;

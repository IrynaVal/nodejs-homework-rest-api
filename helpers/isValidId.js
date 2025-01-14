const { isValidObjectId } = require("mongoose");

const HttpError = require("./HttpError");

const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (isValidObjectId(id)) {
    next(new HttpError(400, `${contactId} is not valid id.`));
  }
  next();
};

module.exports = isValidId;

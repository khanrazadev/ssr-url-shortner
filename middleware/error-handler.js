import { constants } from "../constants.js";

const errorHandler = async (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constants.NOT_FOUND:
      res.json({
        title: "Not found",
        message: err.message,
        stackTrack: err.stack,
      });
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation error",
        message: err.message,
        stackTrack: err.stack,
      });
    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrack: err.stack,
      });

    default:
      console.log("No Error");
      break;
  }
};

export default errorHandler;

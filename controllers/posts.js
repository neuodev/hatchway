const asyncHandler = require('express-async-handler');
const combinePosts = require('../utils/allPosts');
const ErrorResponse = require('../utils/ErrorResponse');
const urlPipline = require('../utils/urlPipline');
const {
  validSortByParam,
  validDirectionParam,
} = require('../utils/validParams');
const getPosts = asyncHandler(async (req, res, next) => {
  const { tags, sortBy, direction } = req.query;
  // validate paramters
  if (!tags) {
    return next(new ErrorResponse('Tags parameter is required', 400));
  }
  if (sortBy && !validSortByParam(sortBy)) {
    return next(new ErrorResponse('sortBy parameter is invalid', 400));
  }
  if (direction && !validDirectionParam(direction)) {
    return next(new ErrorResponse('direction parameter is invalid', 400));
  }

  let posts = await combinePosts(tags, sortBy, direction);

  res.status(200).json({
    posts,
  });
});

module.exports = {
  getPosts,
};

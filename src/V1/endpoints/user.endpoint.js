const safeStringify = require('fast-safe-stringify');

/**
 * Entry point to create a new user.
 * @param userService
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
module.exports.createUser = async (userService, req, res) => {
  try {
    const response = await userService.createNewUser(req);

    return res.status(200).json(response);
  } catch (error) {
    safeStringify(error);
    // Note in ideal world we need to create error handling classes
    // with correct error status, messages etc.
    // Examples: BadRequest, NotFound, ServerError etc.
    return res.status(500).json({
      error: error.message || 'Unknown Error',
    });
  }
};

/**
 * Entry point to get user.
 * @param userService
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
module.exports.getUser = async (userService, req, res) => {
  try {
    const response = await userService.getUser(req);

    return res.status(200).json(response);
  } catch (error) {
    safeStringify(error);
    return res.status(500).json({
      error: error.message || 'Unknown Error',
    });
  }
};

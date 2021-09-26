const safeStringify = require('fast-safe-stringify');

/**
 * Entry point to create a new user task
 * @param taskService
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
module.exports.createTask = async (taskService, req, res) => {
  try {
    const response = await taskService.createNewTask(req);

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
 * Entry point to get list of user tasks.
 * @param taskService
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
module.exports.listUserTasks = async (taskService, req, res) => {
  try {
    const response = await taskService.listUserTasks(req);

    return res.status(200).json(response);
  } catch (error) {
    safeStringify(error);
    return res.status(500).json({
      error: error.message || 'Unknown Error',
    });
  }
};

module.exports.updateUserTask = async (taskService, req, res) => {
  try {
    const response = await taskService.updateUserTask(req);

    return res.status(200).json(response);
  } catch (error) {
    safeStringify(error);
    return res.status(500).json({
      error: error.message || 'Unknown Error',
    });
  }
};

module.exports.deleteTask = async (taskService, req, res) => {
  try {
    const response = await taskService.deleteTask(req);

    return res.status(200).json(response);
  } catch (error) {
    safeStringify(error);
    return res.status(500).json({
      error: error.message || 'Unknown Error',
    });
  }
};

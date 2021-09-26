const { TaskClient } = require('../clients/taskClient');
const HelperFunctions = require('../utils/helperFunctions');
/**
 * Creates a new task for user
 * @param req
 * @returns {Promise<*>}
 */
module.exports.createNewTask = async (req) => {
  const newTask = req.body;

  // TODO: check if user exist when creating a task.
  // TODO: add validation that date is in future
  // TODO: future improvements add specific hours min sec.
  console.log('Creating new task.');

  if (Object.prototype.hasOwnProperty.call(newTask, 'subTask')) {
    if (HelperFunctions.ifSubTaskObjectIncorrect(newTask)) {
      return { message: 'Wrong subtask structure' };
    }

    // make sure sub task dueDate is less or equal to task dueDate
    for (let i = 0; i < newTask.subTask.length; i++) {
      if (HelperFunctions.checkSubTaskDueDate(newTask.subTask[i].dueDate, newTask.dueDate)) {
        return { message: 'Sub task dueDate should be less or equal to task dueDate' };
      }
    }
  }
  const task = await TaskClient.createNewTask(newTask);

  return task;
};

/**
 * Returns list of task specific to the user is pagination information.
 * @param req
 * @returns {Promise<{total: *, pageSize, taskList: (*|*), page: (number|number)}>}
 */
module.exports.listUserTasks = async (req) => {
  const page = parseInt(req.query.page) || 0;
  const limit = parseInt(req.query.limit) || 2;

  const searchQuery = HelperFunctions.generateSearchQuery(req.query);
  console.log('Get list of tasks paginated.');
  const response = await TaskClient.getAllTasks(searchQuery, page, limit);

  return {
    page,
    total: response.documentsCount,
    pageSize: response.taskList.length,
    taskList: response.taskList,
  };
};

module.exports.updateUserTask = async (req) => {
  const updateInfo = req.body;
  const { taskId } = req.query;

  console.log('Update task');

  // get task by id
  const taskToUpdate = await TaskClient.findTaskById(taskId);

  if (taskToUpdate === null) {
    return { message: `Task with id: ${taskId} does not exist` };
  }

  if (Object.prototype.hasOwnProperty.call(updateInfo, 'subTask')) {
    if (HelperFunctions.ifSubTaskObjectIncorrect(updateInfo)) {
      return { message: 'Wrong subtask structure' };
    }

    // make sure sub task dueDate is less or equal to task dueDate
    for (let i = 0; i < updateInfo.subTask.length; i++) {
      if (HelperFunctions.checkSubTaskDueDate(updateInfo.subTask[i].dueDate, taskToUpdate.dueDate)) {
        return { message: 'Sub task dueDate should be less or equal to task dueDate' };
      }
    }
  }
  const response = await TaskClient.updateTask(updateInfo, taskId);

  return response;
};

module.exports.deleteTask = async (req) => {
  const { taskId } = req.query;
  console.log('Delete task.');
  const response = await TaskClient.deleteTask(taskId);

  return response;
};

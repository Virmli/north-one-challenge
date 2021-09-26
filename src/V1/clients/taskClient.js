const { TaskModel } = require('../models/task');

const TaskClient = {
  /**
   * Creates a new task
   * @param newTask
   * @returns {Promise<*>}
   */
  async createNewTask(newTask) {
    const task = await TaskModel.create(newTask);
    return task;
  },

  async findTaskById(taskId) {
    const task = await TaskModel.findById(taskId);
    return task;
  },

  /**
   * Get all user tasks with pagination support.
   * @param userId
   * @param page
   * @param limit
   * @returns {Promise<*>}
   */
  async getAllTasks(query, page, limit) {
    const taskList = await TaskModel.find(query)
      .skip(page * limit)
      .limit(limit);

    const documentsCount = await TaskModel.countDocuments(query);

    return {
      taskList,
      documentsCount,
    };
  },

  /**
   * Updates existing task.
   * @param updateInfo
   * @param taskId
   * @returns {Promise<*>}
   */
  async updateTask(updateInfo, taskId) {
    const query = { _id: taskId };
    const updatedTask = await TaskModel.findOneAndUpdate(query, updateInfo,
      { new: true });

    return updatedTask;
  },

  /**
   * Delete task by task id.
   * @param taskId
   * @returns {Promise<awaited Query<any, any, {}, any> | Query<any, any, {}, DocType>>}
   */
  async deleteTask(taskId) {
    const deleted = await TaskModel.findByIdAndDelete(taskId);

    return deleted;
  },
};

module.exports = {
  TaskClient,
};

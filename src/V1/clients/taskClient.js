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

  async updateTask(updateInfo, taskId) {
    const query = { _id: taskId };
    const updatedTask = await TaskModel.findOneAndUpdate(query, updateInfo,
      { new: true });

    return updatedTask;
  },

  async deleteTask(taskId) {
    const deleted = await TaskModel.findByIdAndDelete(taskId);

    return deleted;
  },
};

module.exports = {
  TaskClient,
};

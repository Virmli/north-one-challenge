class HelperFunctions {
  /**
   * Check that sub task date is less or equal to main task date.
   * @param subDate
   * @param taskDate
   * @returns {boolean}
   */
  static checkSubTaskDueDate(subDate, taskDate) {
    if (new Date(subDate) > new Date(taskDate)) {
      return false;
    }
    return true;
  }

  static ifSubTaskObjectIncorrect(newTask) {
    let response = true;
    if (Array.isArray(newTask.subTask)) {
      newTask.subTask.forEach((item) => {
        if (Object.prototype.hasOwnProperty.call(item, 'dueDate')) {
          response = false;
        }
      });
    }
    return response;
  }

  static generateSearchQuery(apiQuery) {
    const searchQuery = {};
    for (const key in apiQuery) {
      if (key !== 'page' && key !== 'limit') {
        searchQuery[key] = searchQuery[key] !== '' ? apiQuery[key] : null;
      }
    }

    return searchQuery;
  }
}

module.exports = HelperFunctions;

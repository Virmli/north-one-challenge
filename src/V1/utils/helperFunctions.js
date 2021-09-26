class HelperFunctions {
  /**
   * Converts human format YYYY-MM-DD to ISO YYYY-MM-DDTHH:MM:SSZ
   * @param humanDate
   * @returns {string}
   */
  static dateToISO8601(humanDate) {
    const date = new Date(humanDate);

    return date.toISOString();
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

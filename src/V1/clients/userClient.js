const { UserModel } = require('../models/user');

const UserClient = {
  /**
   * Create new user.
   * @param user
   * @returns {Promise<EnforceDocument<unknown, {}, {}>[]>}
   */
  async createNewUser(user) {
    const newUser = await UserModel.create(user);

    return newUser;
  },

  /**
   * Get user by id.
   * @param userId
   * @returns {Promise<*>}
   */
  async getUser(userId) {
    const user = await UserModel.findById(userId);

    return user;
  },
};

module.exports = {
  UserClient,
};

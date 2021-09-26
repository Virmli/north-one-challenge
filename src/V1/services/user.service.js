const { UserClient } = require('../clients/userClient');

module.exports.createNewUser = async (req) => {
  const newUser = req.body;

  console.log('Creating new user.');
  const user = await UserClient.createNewUser(newUser);

  return user;
};

module.exports.getUser = async (req) => {
  const { userId } = req.query;

  console.log('Get user from DB.');
  const user = await UserClient.getUser(userId);

  return user;
};

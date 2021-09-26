const mongoose = require('mongoose');

const userDBSchema = new mongoose.Schema({
  createdOn: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  }
});

const UserModel = mongoose.model('user', userDBSchema);

module.exports = {
  UserModel,
  userDBSchema,
};

const mongoose = require('mongoose');

const PENDING_ENUM = 'Pending';
const DONE_ENUM = 'Done';

const taskDBSchema = new mongoose.Schema({
  createdOn: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: [
      PENDING_ENUM,
      DONE_ENUM,
    ],
    default: PENDING_ENUM,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    default: '',
  },
});

const TaskModel = mongoose.model('task', taskDBSchema);

module.exports = {
  TaskModel,
  taskDBSchema,
};

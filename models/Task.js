const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
  dueDate: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Task', TaskSchema);

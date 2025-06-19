const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);

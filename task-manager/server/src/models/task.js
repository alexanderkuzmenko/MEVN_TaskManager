const mongoose = require("mongoose")
const TaskSchema = mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    // owner: {
    //     type: mongoose.Schema.Types.ObjectID,
    //     required: true,
    //     ref: "User"
    // }
});
const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
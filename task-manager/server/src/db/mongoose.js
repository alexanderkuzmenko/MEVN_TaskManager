const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/task_manager', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});
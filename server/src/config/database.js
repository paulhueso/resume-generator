var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/resume-generator');
let database = mongoose.connection;

module.exports = database;
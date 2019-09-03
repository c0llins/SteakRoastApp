const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/steakroastapp', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/BookSearch');

module.exports = mongoose.connection;

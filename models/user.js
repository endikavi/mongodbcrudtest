const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: 'string',
  username: 'string',
  avatar: 'string',
  email: 'string',
});

const User = mongoose.model('Users', schema);

module.exports = User;
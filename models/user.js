const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: 'string',
  username: 'string',
  avatar: 'string',
  email: 'string',
  active: 'boolean',
});

const User = mongoose.model('Users', schema);

module.exports = User;
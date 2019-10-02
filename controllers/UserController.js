const User = require('../models/user');

exports.GetAllUsers = (req, res) => {
  User.find({}).exec(function(err, users) {
    if (err) return console.error(err);
    if (users.length > 0) {
      console.log('Se ha pedido el listado de usuarios');
      res.json(users);
    } else {
      console.log('Sin usuarios');
      res.json([]);
    }
  });
};

exports.GetUser = (req, res) => {
  User.findById(req.params._id).exec(function(err, user) {
    if (err) return console.error(err);
    if (user) {
      console.log(user);
      res.json(user);
    } else {
      res.json({});
    }
  });
};

exports.DeleteUser = (req, res) => {
  User.remove({_id: req.params._id}, function(err) {
    if (err) return handleError(err);
    console.log('Usuario eliminado id: ' + req.params._id);
    res.send(true);
  });
};

exports.AddUser = (req, res) => {
  const NewUser = new User();
  Object.assign(NewUser, {
    name: req.body.name,
    active: req.body.active,
    avatar: req.body.avatar,
    username: req.body.username,
    email: req.body.email,
  });
  NewUser.save().then(user => {
    console.log('Añadido usuario:');
    console.log(user);
    res.json(user);
  });
};

exports.UpdateUser = (req, res) => {
  let Update = {};
  Object.assign(Update, {
    name: req.body.name,
    avatar: req.body.avatar,
    active: req.body.active,
    username: req.body.username,
    email: req.body.email,
  });
  User.updateOne({_id: req.params._id}, Update, function(err) {
    if (err) return handleError(err);
    console.log('Actualizado usuario: ' + req.params._id);
    Object.assign(Update, {
      _id: req.params._id
    });
    res.json(Update);
  });
};

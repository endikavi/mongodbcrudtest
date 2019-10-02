const User = require('../models/User');

exports.GetAllUsers = (req, res) => {

    User.find({}).exec(function (err, users) {
        
        if (err) return console.error(err);
        
        if (users.length > 0){
            console.log(users);
            res.json(users);
        }else{console.log(users);
            res.json([]);
        }
        
    })

}

exports.GetUser = (req, res) => {

    User.find({_id: req.params._id}).exec(function (err, user) {
        
        if (err) return console.error(err);
        
        if (users){
            console.log(user);
            res.json(user);
        }else{
            res.json({});
        }
        
    })

}

exports.DeleteUser = (req, res) => {

    User.remove({ _id: req.params._id }, function (err) {
        
        if (err) return handleError(err);
        
        console.log('Usuario eliminado id: ' + req.params._id);

        res.send(true);
        
	});
    
}

exports.AddUser = (req, res) => {

    const NewUser = new User();
    
    Object.assign(NewUser, req.body);
    
    NewUser.save();
    
}

exports.UpdateUser = (req, res) => {

    let Update = req.body;

    User.update({ _id: req.params._id }, Update, function (err) {
        
		if (err) return handleError(err);
        
        console.log('Actualizado usuario: '+req.params._id);
        
        res.send(true);
        
	});
    
}
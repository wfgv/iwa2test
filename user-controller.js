var User = require('./models/user');

//--------------#####---------------
// create user
exports.createUser = function(req, res) { 
    var newuser = new User(req.body);
    newuser.save(function (err, user) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(user); 
});
};
//--------------#####---------------
// read ALL user
exports.getUsers = function(req, res) {
  User.find({}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(users);
  }); 
};
//--------------#####---------------
// read single user
exports.getUser = function(req, res) {
  User.findOne({_id: req.params.id}, function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};
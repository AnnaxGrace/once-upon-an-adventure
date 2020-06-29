const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
},
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  // findUser: function(req, res){
  //   db.User.find(req.query)
  //   .then(dbUser => 
  //     // add bcrypt logic
  //     res.json(dbUser))
  //   .catch(err => res.status(422).json(err))
  // }
 
};

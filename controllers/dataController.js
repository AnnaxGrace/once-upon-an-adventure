const db = require("../models");
const bcrypt = require("bcryptjs");

// Defining methods for the dataController
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        console.log(hash);
        const userData = {
          email: req.body.email,
          password: hash,
        };
        db.User.create(userData)
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(422).json(err));
      });
    });
  },
  findUser: function (req, res) {
    db.User.find({email: req.body.email})
      .then(dbUser => {
          const ah = bcrypt.compare(req.body.password, dbUser[0].password).then(result => {
            if(result===true){
              res.json(dbUser)
            }else{
              res.status(404).send({ error: "boo:(" });
            }
          })
      }).catch((err) => res.status(422).json(err));
  }
};

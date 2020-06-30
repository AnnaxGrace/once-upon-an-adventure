const db = require("../models");
const bcrypt = require("bcryptjs");

// Defining methods for the dataController
module.exports = {
  
  create: function (req, res) {
    bcrypt.genSalt(20, (err, salt) => {
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
    // console.log(req.body)
    db.User.find({email: req.body.email})
      .then(
        (dbUser) => {
          // console.log(req.body.password);
          bcrypt.compare(req.body.password, dbUser[0].password).then(result => {
            console.log(result)
            res.json(true)
          })
          // console.log(bcrypt.compareSync(req.body.password, dbUser[0].password))
          // console.log(dbUser[0].password)
        }
      
      )
      // .catch((err) => res.status(422).json(err));
  },
};

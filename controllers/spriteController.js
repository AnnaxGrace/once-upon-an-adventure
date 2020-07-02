const db = require("../models");

// Defining methods for the dataController
module.exports = {
    findAll: function(req, res) {
        db.Sprite.find(req.query)
          .then(dbBook => res.json(dbBook))
          .catch(err => res.status(422).json(err));
      },
    //   findById: function(req, res) {
    //     db.Book.findById(req.params.id)
    //       .then(dbBook => res.json(dbBook))
    //       .catch(err => res.status(422).json(err));
    //   },
      create: function(req, res) {
        db.Sprite.create(req.body)
          .then(dbBook => res.json(dbBook))
          .catch(err => res.status(422).json(err));
      },
      findSprite: function (req, res) {
        db.Sprite.find({sprite: req.body.sprite})
          .then(dbUser => {
            //   const ah = bcrypt.compare(req.body.password, dbUser[0].password).then(result => {
            //     if(result===true){
                  res.json(dbUser)
                // }else{
                //   res.status(404).send({ error: "boo:(" });
                
            //   })
          }).catch((err) => res.status(422).json(err));
      },
    //   update: function(req, res) {
    //     db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
    //       .then(dbBook => res.json(dbBook))
    //       .catch(err => res.status(422).json(err));
    //   },
    //   remove: function(req, res) {
    //     db.Book.findById(req.params.id)
    //       .then(dbBook => dbBook.remove())
    //       .then(dbBook => res.json(dbBook))
    //       .catch(err => res.status(422).json(err));
    //   }
};
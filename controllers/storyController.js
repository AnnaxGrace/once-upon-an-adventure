const db = require("../models");

// Defining methods for the storyController
module.exports = {
  findAll: function(req, res) {
    db.Story
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Story
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Story
      .create(req.body)
      .then(dbModel => {
          console.log("story added")
          res.json(dbModel)
        })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Story
      .findOneAndUpdate({ userId: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

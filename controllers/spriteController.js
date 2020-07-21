const db = require("../models");

// Defining methods for the dataController
module.exports = {
    findAll: function(req, res) {
        db.Sprite.find(req.query)
          .then(dbBook => res.json(dbBook))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        console.log(req.body);
        const { id } = req.params
        db.Sprite.create(req.body)
        .then(({ _id}) => db.User.findOneAndUpdate({_id: id}, { $set: {sprite: _id}}, {new: true}))
          .then(dbBook => res.json(dbBook))
          .catch(err => res.status(422).json(err));
      },
      findSprite: function (req, res) {
        db.Sprite.find({sprite: req.body.sprite})
        // .populate("sprite")
          .then(dbUser => {
            //   const ah = bcrypt.compare(req.body.password, dbUser[0].password).then(result => {
            //     if(result===true){
                  res.json(dbUser)
                // }else{
                //   res.status(404).send({ error: "boo:(" });
                
            //   })
          }).catch((err) => res.status(422).json(err));
      },
      updateMoney: function(req, res) {
        console.log(req.params.id)
        db.User.find({_id: req.params.id}).then(
          dbUser => {
            // console.log(dbUser)
            db.Sprite.findOneAndUpdate({ _id: dbUser[0].sprite }, { $set: {money: req.params.money}}, {useFindAndModify: false})
          .then(dbBook => {
            // console.log("dbBook")
            res.json(dbBook)})
          .catch(err => res.status(422).json(err));
          }
        )
        
      },
      updateHomeFirst: function(req, res) {
        console.log(req.params.id)
        db.User.find({_id: req.params.id}).then(
          dbUser => {
            // console.log(dbUser)
            db.Sprite.findOneAndUpdate({ _id: dbUser[0].sprite }, { $set: {homeFirst: false}}, {useFindAndModify: false})
          .then(dbBook => {
            // console.log("dbBook")
            res.json(dbBook)})
          .catch(err => res.status(422).json(err));
          }
        )
        
      },
      updateGuardTalk: function(req, res) {
        console.log(req.params.id)
        db.User.find({_id: req.params.id}).then(
          dbUser => {
            // console.log(dbUser)
            db.Sprite.findOneAndUpdate({ _id: dbUser[0].sprite }, { $set: {apiFirstGuardTalk: false}}, {useFindAndModify: false})
          .then(dbBook => {
            // console.log("dbBook")
            res.json(dbBook)})
          .catch(err => res.status(422).json(err));
          }
        )
        
      },
      
      updatePlace: function(req, res) {
        db.User.find({_id: req.params.id}).then(
          dbUser => {
            // console.log(dbUser)
            db.Sprite.findOneAndUpdate({ _id: dbUser[0].sprite }, { $set: {place: req.params.place}}, {useFindAndModify: false})
          .then(dbBook => {
            // console.log("dbBook")
            res.json(dbBook)})
          .catch(err => res.status(422).json(err));
          }
        )
        
      },
      
      updateOrcTalk: function(req, res) {
        console.log(req.params.id)
        db.User.find({_id: req.params.id}).then(
          dbUser => {
            // console.log(dbUser)
            db.Sprite.findOneAndUpdate({ _id: dbUser[0].sprite }, { $set: {apiFirstOrcTalk: false}}, {useFindAndModify: false})
          .then(dbBook => {
            // console.log("dbBook")
            res.json(dbBook)})
          .catch(err => res.status(422).json(err));
          }
        )
        
      },
      updateJaceTalk: function(req, res) {
        console.log(req.params.id)
        db.User.find({_id: req.params.id}).then(
          dbUser => {
            // console.log(dbUser)
            db.Sprite.findOneAndUpdate({ _id: dbUser[0].sprite }, { $set: {apiFirstJaceTalk: false}}, {useFindAndModify: false})
          .then(dbBook => {
            // console.log("dbBook")
            res.json(dbBook)})
          .catch(err => res.status(422).json(err));
          }
        )
        
      },
      updateThiefTalk: function(req, res) {
        console.log(req.params.id)
        db.User.find({_id: req.params.id}).then(
          dbUser => {
            // console.log(dbUser)
            db.Sprite.findOneAndUpdate({ _id: dbUser[0].sprite }, { $set: {apiFirstThiefTalk: false}}, {useFindAndModify: false})
          .then(dbBook => {
            // console.log("dbBook")
            res.json(dbBook)})
          .catch(err => res.status(422).json(err));
          }
        )
        
      },
      updatePermit: function(req, res) {
        console.log(req.params.id)
        db.User.find({_id: req.params.id}).then(
          dbUser => {
            console.log(dbUser)
            db.Sprite.findOneAndUpdate({ _id: dbUser[0].sprite }, { $set: {permit: true}}, {useFindAndModify: false})
          .then(dbBook => {
            console.log(dbBook)
            res.json(dbBook)})
          .catch(err => res.status(422).json(err));
          }
        )
        
      },
      updateLives: function(req, res) {
        console.log(req.params.id)
        db.User.find({_id: req.params.id}).then(
          dbUser => {
            console.log(dbUser)
            db.Sprite.findOneAndUpdate({ _id: dbUser[0].sprite }, { $set: {lives: req.params.lives}}, {useFindAndModify: false})
          .then(dbBook => {
            console.log(dbBook)
            res.json(dbBook)})
          .catch(err => res.status(422).json(err));
          }
        )
        
      }
    //   remove: function(req, res) {
    //     db.Book.findById(req.params.id)
    //       .then(dbBook => dbBook.remove())
    //       .then(dbBook => res.json(dbBook))
    //       .catch(err => res.status(422).json(err));
    //   }
};
let db = require("../../models/User");
let passport = require("../config/passport");

module.exports = function (app) {
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  app.post("/api/signup", function ({ body }, res) {
    // console.log(body)
    db.User.create(body)
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        // console.log(err)
        res.status(401).json(err);
      });
  });

  app.get("/api/signup", function(req,res){
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  })

   // Route for logging user out
   app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });



};

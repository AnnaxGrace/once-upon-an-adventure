const router = require("express").Router();
const dataController = require("../../controllers/dataController");

// Matches with "/api/signup"
router.route("/")
  .get(dataController.findAll)
  .post(dataController.create);
 
  router.route("/login")
  .post(dataController.findUser)


  module.exports = router;
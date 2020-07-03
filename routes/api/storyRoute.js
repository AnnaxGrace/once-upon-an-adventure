const router = require("express").Router();
const storyController = require("../../controllers/storyController");

// Matches with "/api/story"
router.route("/")
  .get(storyController.findAll)
  .post(storyController.create)
 

  router.route("/:id")
  .get(storyController.findById)
  .post(storyController.update)
 
 
  module.exports = router;
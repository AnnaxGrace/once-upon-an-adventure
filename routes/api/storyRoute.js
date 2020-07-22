const router = require("express").Router();
const storyController = require("../../controllers/storyController");

// Matches with "/api/story"
router.route("/:id?")
  .get(storyController.findAll)
  .post(storyController.create)
 
  router.route("/api/story/update/:id?/:place?")
  .put(storyController.updateStory)
 
 
 
  module.exports = router;
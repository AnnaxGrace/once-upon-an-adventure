const router = require("express").Router();
const spriteController = require("../../controllers/spriteController");


// // Matches with "/api/sprite"
router.route("/:id?")
  .get(spriteController.findAll)
  .post(spriteController.create)
  .put(spriteController.update)
  
  router.route("/homefirst/:id?")
  .put(spriteController.updateHomeFirst)

  router.route("/guardTalk/:id?")
  .put(spriteController.updateGuardTalk)

  router.route("/orcTalk/:id?")
  .put(spriteController.updateOrcTalk)

  router.route("/jaceTalk/:id?")
  .put(spriteController.updateJaceTalk)

  router.route("/thiefTalk/:id?")
  .put(spriteController.updateThiefTalk)
  
  router.route("/permit/:id?")
  .put(spriteController.updatePermit)

  router.route("/placeCliff/:id?")
  .put(spriteController.updatePlaceCliff)

  router.route("/placeForest/:id?")
  .put(spriteController.updatePlaceForest)





module.exports = router;

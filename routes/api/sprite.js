const router = require("express").Router();
const spriteController = require("../../controllers/spriteController");


// // Matches with "/api/sprite"
router.route("/:id?")
  .get(spriteController.findAll)
  .post(spriteController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(spriteController.findById)
//   .put(spriteController.update)
//   .delete(spriteController.remove);

module.exports = router;

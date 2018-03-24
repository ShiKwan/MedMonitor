const router = require("express").Router();
const medicationController = require("../../controllers/medicationController");

// Matches with "/api/books"
router.route("/")
  .get(medicationController.findAll)
  .post(medicationController.create);

// Matches with "/api/books/:id"
router
  .route("/dose/:id")
  .put(medicationController.update)
  .delete(medicationController.remove);

router
    .route("/:id")
    .delete(medicationController.remove);

module.exports = router;

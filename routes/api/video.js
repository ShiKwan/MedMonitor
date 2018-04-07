const router = require("express").Router();
const videoController = require("../../controllers/videoController");

// Matches with "/api/alert"
router.route("/")
    .get(videoController.findAll)
    .post(videoController.create);

module.exports = router;

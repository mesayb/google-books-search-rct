const router = require("express").Router();
const API = require("../../")
const googleBooksController = require("../../controllers/googleBooksController");


// Matches with "/api/books"
router.route("/")
  .get(googleBooksController.findAll)
  .post(googleBooksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(googleBooksController.findById)
  .delete(googleBooksController.remove);

module.exports = router;

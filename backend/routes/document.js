const router = require("express").Router();

const controller = require("../controllers/documentController");

router.get("/:id", controller.getUserDocs);

module.exports = router;

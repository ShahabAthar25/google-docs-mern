const router = require("express").Router();

const controller = require("../controllers/documentController");
const isAuthenticated = require("../utils/check-auth");

router.get("/:id", isAuthenticated, controller.getOneDocuments);
router.get("/user/:id", isAuthenticated, controller.getUserDocuments);
router.post("/", isAuthenticated, controller.createDocument);
router.put("/:id", isAuthenticated, controller.updateDocument);
router.delete("/:id", isAuthenticated, controller.deleteDocument);

module.exports = router;

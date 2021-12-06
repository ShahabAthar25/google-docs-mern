const router = require("express").Router();

const controller = require("../controllers/userController");
const isAuthenticated = require("../utils/check-auth");
const upload = require("../utils/imageMiddleware");

router.get("/:id", controller.getProfile);
router.put("/:id", isAuthenticated, controller.updateProfile);
router.delete("/:id", isAuthenticated, controller.deleteUser);
router.post("/:id/photo", upload.single("file"), controller.uploadPhoto);

module.exports = router;

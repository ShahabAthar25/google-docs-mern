const router = require("express").Router();

const controller = require("../controllers/userController");
const isAuthenticated = require("../utils/check-auth");

router.get("/:id", controller.getProfile);
router.put("/:id", isAuthenticated, controller.updateProfile);
router.delete("/:id", isAuthenticated, controller.deleteUser);

module.exports = router;

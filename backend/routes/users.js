const router = require("express").Router();

const controller = require("../controllers/userController");
const isAuthenticated = require("../utils/check-auth");

router.get("/me", isAuthenticated, controller.getCurrentUser);
router.put("/", isAuthenticated, controller.updateProfile);
router.delete("/", isAuthenticated, controller.deleteUser);
router.post("/photo", isAuthenticated, controller.uploadPhoto);

module.exports = router;

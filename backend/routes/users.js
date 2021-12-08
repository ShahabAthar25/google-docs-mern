const router = require("express").Router();

const controller = require("../controllers/userController");
const isAuthenticated = require("../utils/check-auth");
const upload = require("../utils/imageMiddleware");

router.get("/me", isAuthenticated, controller.getCurrentUser);
router.put("/", isAuthenticated, controller.updateProfile);
router.delete("/", isAuthenticated, controller.deleteUser);
router.post(
  "/:id/photo",
  [upload.single("file"), isAuthenticated],
  controller.uploadPhoto
);

module.exports = router;

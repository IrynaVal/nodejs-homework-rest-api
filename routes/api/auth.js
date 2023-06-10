const express = require("express");

const authController = require("../../controllers/auth-controllers");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { isValidId } = require("../../helpers");

const {
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
} = require("../../schemas/users-schema");

const router = express.Router();

router.post("/register", validateBody(registerSchema), authController.register);

router.post("/login", validateBody(loginSchema), authController.login);

router.get("/current", authenticate, authController.getCurrent);

router.post("/logout", authenticate, authController.logout);

router.patch(
  "/:userId/subscription",
  authenticate,
  isValidId,
  validateBody(updateSubscriptionSchema),
  authController.updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  authController.updateAvatar
);

module.exports = router;

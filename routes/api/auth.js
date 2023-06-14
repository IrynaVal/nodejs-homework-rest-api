const express = require("express");

const authController = require("../../controllers/auth-controllers");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { isValidId } = require("../../helpers");

const {
  registerSchema,
  loginSchema,
  updateSubscriptionSchema,
  userEmailSchema,
} = require("../../schemas/users-schema");

const router = express.Router();

router.post("/register", validateBody(registerSchema), authController.register);

router.get("/verify/:verificationToken", authController.verify);

router.post(
  "/verify",
  validateBody(userEmailSchema),
  authController.resendVerificationEmail
);

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

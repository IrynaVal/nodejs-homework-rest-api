const express = require("express");

const ctrl = require("../../controllers/auth-controllers");

const { validateBody } = require("../../decorators");

const { registerSchema, loginSchema } = require("../../schemas/users-schema");

const router = express.Router();

router.post("/register", validateBody(registerSchema), ctrl.register);

router.post("/login", validateBody(loginSchema), ctrl.login);

module.exports = router;

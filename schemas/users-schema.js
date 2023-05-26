const Joi = require("joi");

const registerSchema = Joi.object({
  // name: Joi.string().required(),
  password: Joi.string().min(6).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  subscription: Joi.string(),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().min(6).required(),
});

// const updateStatusContactSchema = Joi.object({
//   favorite: Joi.boolean().required(),
// });

module.exports = {
  registerSchema,
  loginSchema,
};

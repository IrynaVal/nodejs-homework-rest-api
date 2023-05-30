const express = require("express");

const contactsController = require("../../controllers/contacts-controllers");

const {
  contactSchema,
  updateStatusContactSchema,
} = require("../../schemas/contacts-schemas");

const { validateBody, authenticate } = require("../../middlewares");

const { isValidId } = require("../../helpers");

const router = express.Router();

router.get("/", authenticate, contactsController.listContacts);

router.get(
  "/:contactId",
  authenticate,
  isValidId,
  contactsController.getContactById
);

router.post(
  "/",
  authenticate,
  validateBody(contactSchema),
  contactsController.addContact
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  contactsController.removeContact
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(contactSchema),
  contactsController.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(updateStatusContactSchema),
  contactsController.updateStatusContact
);

module.exports = router;

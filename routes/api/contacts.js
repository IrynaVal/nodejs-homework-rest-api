const express = require("express");

const contactsController = require("../../controllers/contacts-controllers");

const {
  contactSchema,
  updateStatusContactSchema,
} = require("../../schemas/contacts-schemas");

const { validateBody } = require("../../decorators");

const { isValidId } = require("../../helpers");

const router = express.Router();

router.get("/", contactsController.listContacts);

router.get("/:contactId", isValidId, contactsController.getContactById);

router.post("/", validateBody(contactSchema), contactsController.addContact);

router.delete("/:contactId", isValidId, contactsController.removeContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(contactSchema),
  contactsController.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(updateStatusContactSchema),
  contactsController.updateStatusContact
);

module.exports = router;

const { Router } = require("express");
const {
  createMessage,
  getAllMessages,
  getMessagesByEmail,
  deleteMessageByEmail,
} = require("../controllers/message.controllers");

const messageRouter = Router();

// Route to create a new message
messageRouter.post("/create", createMessage);

// Route to get all messages
messageRouter.get("/all", getAllMessages);

// Route to get messages by user email
messageRouter.get("/:email", getMessagesByEmail);

// Route to delete message by email
messageRouter.delete("/delete/:email", deleteMessageByEmail);

module.exports = { messageRouter };

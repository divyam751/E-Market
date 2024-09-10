const { Message } = require("../models/message.models");
const { successResponse } = require("../utils/responseFormatter");

// Create or Add Message
const createMessage = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    // Check if the user with the same email already exists
    let userMessage = await Message.findOne({ email });

    if (userMessage) {
      // User exists, push new message to the messages array
      userMessage.messages.push({ message });
      await userMessage.save();

      return res.status(200).json(
        successResponse({
          message: "Thank you for your message. We’ll get back to you shortly.",
          data: userMessage,
        })
      );
    } else {
      // Create new user message entry
      const newMessage = new Message({
        name,
        email,
        messages: [{ message }],
      });

      await newMessage.save();

      return res.status(201).json(
        successResponse({
          message: "Thank you for your message. We’ll get back to you shortly.",
          data: newMessage,
        })
      );
    }
  } catch (error) {
    next(error);
  }
};

// Get All Messages
const getAllMessages = async (req, res, next) => {
  try {
    const messages = await Message.find();

    if (messages.length === 0) {
      return res.status(404).json({
        message: "No messages found.",
      });
    }

    return res.status(200).json(
      successResponse({
        message: "Messages retrieved successfully.",
        data: messages,
      })
    );
  } catch (error) {
    next(error);
  }
};

// Get Messages by User Email
const getMessagesByEmail = async (req, res, next) => {
  try {
    const { email } = req.params;

    const userMessages = await Message.findOne({ email });

    if (!userMessages) {
      return res.status(404).json({
        message: `No messages found for email: ${email}`,
      });
    }

    return res.status(200).json(
      successResponse({
        message: "Messages retrieved successfully.",
        data: userMessages,
      })
    );
  } catch (error) {
    next(error);
  }
};

// Delete Message by Email
const deleteMessageByEmail = async (req, res, next) => {
  try {
    const { email } = req.params;

    const deletedMessage = await Message.findOneAndDelete({ email });

    if (!deletedMessage) {
      return res.status(404).json({
        message: `No message found for email: ${email}`,
      });
    }

    return res.status(200).json(
      successResponse({
        message: "Message deleted successfully.",
        data: deletedMessage,
      })
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMessage,
  getAllMessages,
  getMessagesByEmail,
  deleteMessageByEmail,
};

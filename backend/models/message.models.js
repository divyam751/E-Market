const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      maxlength: 30,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
    },
    messages: [
      {
        message: {
          type: String,
          required: true,
          maxlength: 2000,
        },
        receivedAt: {
          type: Date,
          default: Date.now, // Automatically set to current time
        },
      },
    ],
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = { Message };

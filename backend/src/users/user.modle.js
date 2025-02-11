const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


const userschema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const User = mongoose.model("User", userschema);
module.exports = User;

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

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

// Hash password before saving
// userschema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// // Check if password is correct
// userschema.methods.isPasswordCorrect = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

// // Generate Access Token
// userschema.methods.generateAccessToken = function () {
//   return jwt.sign(
//     { _id: this._id, username: this.username, role: this.role },
//     process.env.ACCESS_TOKEN_SECRET,
//     { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
//   );
// };

// // Generate Refresh Token
// userschema.methods.generateRefreshToken = function () {
//   return jwt.sign(
//     { _id: this._id },
//     process.env.REFRESH_TOKEN_SECRET,
//     { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
//   );
// };

const User = mongoose.model("User", userschema);
module.exports = User;

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
      maxlength: 20,
      minlength: 2
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
      unique: true,
      // validate: [/^[a-zA-Z0-9]+$/, 'Email should consist english letters and digits only!'],
      validate: [validator.isEmail, "Email shout be real email"]
    },
    password: {
      type: String,
      required: [true, "password is required!"],
      validate: [
        validator.isStrongPassword,
        "Password shoult be strongest!!! (min: 8 characters, min 1 lower letter, min 1 upper letter, min 1 number and min 1 symbol"
      ]
    }
  },
  {
    timestamps: true
  }
);

userSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  });
});

userSchema.static("findByEmail", function (email) {
  return this.findOne({ email });
});

userSchema.method("validatePassword", function (password) {
  return bcrypt.compare(password, this.password);
});

const User = mongoose.model("User", userSchema);

module.exports = User;

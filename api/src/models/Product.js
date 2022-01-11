const mongoose = require("mongoose");
const validator = require("validator");
mongoose.set("runValidators", true);

let productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 2
    },
    body: {
      type: String,
      required: true,
      minlength: 2
    },
    alergens: {
      type: String,
      enum: [
        "gl",
        "ml",
        "eg",
        "ph",
        "pn",
        "ms",
        "cr",
        "ce",
        "se",
        "lp",
        "mll",
        "so2"
      ],
      required: false
    },
    quantity: {
      type: Number,
      default: 1
    },
    weight: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      enum: ["g", "kg", "ml", "l", "psc", "psc/g", "psc/kg"],
      required: true
    },
    type: {
      type: String,
      enum: [
        "Breakfast",
        "Preorder",
        "Starters",
        "Soups",
        "Salads",
        "BBQ",
        "Main with Meat",
        "Garnishes",
        "Bread",
        "Main without Meat",
        "Jam",
        "Non Alcoholic",
        "Brandy",
        "Wiskey",
        "Hot Drinks",
        "Beer",
        "Other"
      ],
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    imageURL: {
      type: String,
      required: true,
      validate: validator.isURL
    },
    priceSale: {
      type: Number
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

let Product = mongoose.model("Ptoduct", productSchema);

module.exports = Product;

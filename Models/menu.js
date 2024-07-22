const mongoose = require("mongoose");
const Menuschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "Sour", "spicey"],
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredients: {
    type: [String],
    default: false,
  },
  num_sales: {
    type: Number,
    default: 0,
  },
});
const Menu = mongoose.model("Menu", Menuschema);
module.exports = { Menu };

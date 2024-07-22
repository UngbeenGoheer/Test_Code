const mongoose = require("mongoose");
const personSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Age: {
      type: Number,
    },
    Work: {
      type: String,
      enum: ["chef", "waiter", "Maneger"],
      required: true,
    },
    PhoneNo: {
      type: String,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Salary: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const Person = mongoose.model("Person", personSchema);
module.exports = { Person };

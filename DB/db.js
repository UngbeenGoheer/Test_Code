const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb://localhost:27017/Hotel"
    );
    console.log(
      `DB is connected || Server is running on ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("An error is occure while DB connected");
  }
};
module.exports = { connectDB };

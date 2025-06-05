const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB Connection Successful");
  } catch (err) {
    console.error(`Error happend connecting to MongoDB : ${err.message}`);
  }
};

module.exports = connectDB;

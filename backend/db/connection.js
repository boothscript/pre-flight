const mongoose = require("mongoose");

const connectDb = (uri = "mongodb://localhost:27017/preflight") => {
  try {
    mongoose.connect(uri, { useNewUrlParser: true });
    console.log("db connected");
  } catch (err) {
    throw new Error("ERROR: can not connect to db. ", err);
  }
};

module.exports = { connectDb };

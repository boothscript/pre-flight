const mongoose = require("mongoose");
const { connectDb } = require("../db/connection");

connectDb();

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  checklistItems: {
    dateCreated: Date,
    name: { type: String, required: true },
    timeFrame: String,
    subcategory: Number, // ID of subcategory?
    logged: Array,
    checksToComplete: { type: Number, default: 1 }, // Needs better name
  },
  subcategories: {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
  },
});

const User = mongoose.model("Users", userSchema);

export default User;

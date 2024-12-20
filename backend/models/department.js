const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image: String, // URL of image
});

module.exports = mongoose.model("Department", DepartmentSchema);

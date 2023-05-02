const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneno: {
    type: Number,
    required: true,
    maxlenght: 10,
  },
  role: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model('employee' , employeeSchema)

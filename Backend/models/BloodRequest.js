const mongoose = require('mongoose');

const BloodRequestSchema = new mongoose.Schema({
  bloodGroup: {
    type: String,
    required: true
  },
  units: {
    type: Number,
    required: true
  },
  urgency: {
    type: String,
    default: "Normal"
  },
  status: {
    type: String,
    default: "Pending"
  }
}, { timestamps: true });

module.exports = mongoose.model('BloodRequest', BloodRequestSchema);

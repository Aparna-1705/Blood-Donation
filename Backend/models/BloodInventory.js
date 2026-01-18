const mongoose = require('mongoose');

const BloodInventorySchema = new mongoose.Schema({
  bloodGroup: {
    type: String,
    required: true
  },
  units: {
    type: Number,
    required: true
  },
  hospitalName: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('BloodInventory', BloodInventorySchema);

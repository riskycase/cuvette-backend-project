const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  username: String,
  address: String,
});

module.exports = mongoose.model('Address', AddressSchema);

// models/Ong.js

const mongoose = require('mongoose');

const OngSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  founders: {
    type: String,
    required: true
  },
  timeActive: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = Ong = mongoose.model('ong', OngSchema);
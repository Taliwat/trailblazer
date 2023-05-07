const mongoose = require('mongoose');
const { Schema } = mongoose;

const parkSchema = new Schema(
  {
    states: {
      type: String,
    },
    parkCode: {
      type: String,
      unique: true
    },
    designation: {
      type: String
    },
    fullName: {
      type: String
    },
    URL: {
      type: String
    },
    name: {
      type: String
    }
  }
)

const Park = mongoose.model('Park', parkSchema)

module.exports = Park

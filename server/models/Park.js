const mongoose = require('mongoose');
const { Schema } = mongoose;

const parkSchema = new Schema(
  {
    NPS_id: {
      type: String
    },
    url: {
      type: String
    },
    fullName: {
      type: String
    },
    parkCode: {
      type: String
    },
    latitude: {
      type: Number
    },
    longitude:{
      type: Number
    },
    states: {
      type: [String],
    },
    designation: {
      type: String
    }
  }
)

const Park = mongoose.model('Park', parkSchema)

module.exports = Park

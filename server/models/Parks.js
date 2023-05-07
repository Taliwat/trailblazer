const mongoose = require('mongoose');
const { Schema } = mongoose;

const parkSchema = new Schema(
  {
    parkId: {
      type: new mongoose.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId
    },
    states: {
      type: String,
    },
    parkCode: {
      type: String
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

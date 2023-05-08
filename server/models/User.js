const mongoose = require('mongoose');
const validator = require('validator');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const reviewSchema = require('./Review');

const userSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId()
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      validate: [validator.isEmail, 'invalid email']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    state: {
      type: String,
      required: true,
    },
    parksVisited: {
      type: [String]
    },
    wishList: {
      type: [String]
    },
    reviews: [reviewSchema]
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
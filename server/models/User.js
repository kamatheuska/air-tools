const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    minlength: 10,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    minlenght: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} no es un email válido',
    },
  },
  password: {
    type: String,
    required: true,
    minlenght: 6,
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }}]
  },
  {
  usePushEach: true
  }
);

const User = mongoose.model('User', UserSchema);

module.exports = { User };

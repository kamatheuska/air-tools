const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

const StaffSchema = new mongoose.Schema({
  data: [
    {
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
        validate: {
          validator: validator.isEmail,
          message: '{VALUE} no es un email válido',
        },
      },
    },
  ],
});

const Staff = mongoose.model('Staff', StaffSchema);

module.exports = { Staff };

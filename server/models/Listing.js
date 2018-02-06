const mongoose = require('mongoose');

const Listing = mongoose.model('Listing', {
  language: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  rules: {
    check_in: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
      early_msg: {
        type: String,
      },
      late_msg: {
        type: String,
      },
    },
    check_out: {
      end: {
        type: Number,
      },
      late_msg: {
        type: String,
      },
    },
  },
  address: {
    type: String,
    required: true,
    trim: true,
    minlenght: 5,
  },
  introductions: {
    host: {
      type: String,
    },
    area: {
      type: String,
    },
  },
  warnings: {
    check_in: {
      type: String,
    },
  },
});


module.exports = { Listing };

const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');


const ListingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  rules: {
    checkin: {
      start: {
        type: Number,
        default: 1500,
      },
      end: {
        type: Number,
        default: 2200,
      },
      earlyMsg: {
        spa: {
          type: String,
          trim: true,
        },
        eng: {
          type: String,
          trim: true,
        },
      },
      lateMsg: {
        spa: {
          type: String,
          trim: true,
        },
        eng: {
          type: String,
          trim: true,
        },
      },
    },
    checkout: {
      end: {
        type: Number,
        default: 1100,
      },
      lateMsg: {
        spa: {
          type: String,
          trim: true,
        },
        eng: {
          type: String,
          trim: true,
        },
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
      spa: {
        type: String,
        trim: true,
      },
      eng: {
        type: String,
        trim: true,
      },
    },
    area: {
      spa: {
        type: String,
        trim: true,
      },
      eng: {
        type: String,
        trim: true,
      },
    },
  },
  warnings: {
    checkin: {
      spa: {
        type: String,
        trim: true,
      },
      eng: {
        type: String,
        trim: true,
      },
    },
  },
});


const Listing = mongoose.model('Listing', ListingSchema);

module.exports = { Listing };

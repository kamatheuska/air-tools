const mongoose = require('mongoose');

const Staff = mongoose.model('Staff', {
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
      },
    },
  ],
});

module.exports = { Staff };

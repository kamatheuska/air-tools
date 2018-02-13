require('./config/config');

const express = require('express');
const path = require('path');
const _ = require('lodash');
const bodyParser = require('body-parser');
// const morgan = require('morgan');
const { ObjectID } = require('mongodb');

const { authenticate } = require('./middleware/authenticate.js');
const { mongoose } = require('./db/mongoose');
const { Listing } = require('./models/Listing.js');
const { Staff } = require('./models/Staff.js');
const { User } = require('./models/User.js');


const app = express();
const port = process.env.PORT || 3000;

// app.use(morgan('combined'));
app.use(bodyParser.json());

app.post('/users', (req, res) => {
  let body = _.pick(req.body, ['name', 'phone', 'email', 'password']);
  let user = new User(body);
  
  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = { app };

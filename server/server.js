require('./config/config');

const express = require('express');
const path = require('path');
const _ = require('lodash');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const morgan = require('morgan');
const cors = require('cors'); // remove in PRODUCTION

const { authenticate } = require('./middleware/authenticate.js');
const { mongoose } = require('./db/mongoose');
const { Listing } = require('./models/Listing.js');
const { Staff } = require('./models/Staff.js');
const { User } = require('./models/User.js');


const app = express();
const port = process.env.PORT || 3000;
const dist = path.join(__dirname, '..', 'client/dist')

app.use(bodyParser.json());
app.use(express.static(dist));
app.use(morgan('combined'));
app.use(cors()); // remove in PRODUCTION

app.get('/', (req, res) => {
  res
    .status(200)
    .sendFile(path.join(dist, 'index.html'));
});

app.post('/users', (req, res) => {
  let body = _.pick(req.body, ['email', 'password', 'phone', 'name']);
  let user = new User(body);
  console.log(req.body);  
  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  });
});

app.post('/users/login', (req, res) => {
  let body = _.pick(req.body, ['email', 'password']);
  User.findByCredentials(body.email, body.password).then((user) => {
    return user.generateAuthToken().then((token) => {
      res.header('x-auth', token).send(user);
    });  
  }).catch((e) => {
    res.status(400).send();
  });
});

app.post('/listing', (req, res) => {
  let body = req.body;
  let listing = new Listing(body);

  listing.save().then((item) => {
    res.status(200).send(item);
  }).catch((e) => {
    res.status(400).send(e);
  });
  
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = { app };

const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');

const { User } = require('./../../models/User');
const { Listing } = require('./../../models/Listing');
const { Staff } = require('./../../models/Staff');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

const users = [{
  _id: userOneId,
  name: 'Juan Pardo',
  phone: 573002574247,
  email: 'example@example.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, process.env.JWT_SECRET).toString()
  }]
}, {
  _id: userTwoId,
  name:'Matheus Rando',
  phone: 34621541281,
  email: 'matheus@example.com',
  password: 'userTwoPass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userTwoId, access: 'auth'},  process.env.JWT_SECRET).toString()
  }]
}];

const listings = [{
  name: 'Aptos en Cartagena',
  location: 'CTG',
  rules: {
    checkin: {
      earlyMsg: {
        spa: 'ESPAÑOL EARLY: ' + dummyText,
        eng: 'INGLES EARLY: ' + dummyText,
      },
      lateMsg: {
        spa: 'ESPAÑOL LATE: ' + dummyText,
        eng: 'INGLES LATE: ' + dummyText,
      },
    },
    checkout: {
      lateMsg: {
        spa: 'ESPAÑOL LATE: ' + dummyText,
        eng: 'INGLES LATE: ' + dummyText,
      },
    },
  },
  address: 'Calle de San Benito 5-21',
  introductions: {
    host: {
      spa: 'ESPAÑOL INTRO HOST: ' + dummyText,
      eng: 'INGLES INTRO HOST: ' + dummyText,
    },
    area: {
      spa: 'ESPAÑOL INTRO AREA: ' + dummyText,
      eng: 'INGLES INTRO AREA: ' + dummyText,
    },
  },
  warnings: {
    spa: 'ESPAÑOL WARNINGS: ' + dummyText,
    eng: 'INGLES WARNINGS: ' + dummyText,
  },
}];

const populateUsers = (done) => {
  User.remove({}).then(() => {
    let userOne = new User(users[0]).save();
    let userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo]);
  }).then(() => done());
};

const populateListings = (done) => {
  Listing.remove({}).then(() => {
    return Listing.insertOne(listings);
  }).then(() => done());
};

module.exports = { 
  users, 
  populateUsers, 
  listings,
  populateListings,
};






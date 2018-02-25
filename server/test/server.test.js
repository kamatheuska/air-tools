const expect = require('expect');
const request = require('supertest');
const { ObjectID } = require('mongodb');
const _ = require('lodash');

const { app } = require('./../server');

const { Listing } = require('./../models/Listing');
const { Staff } = require('./../models/Staff');
const { User } = require('./../models/User');

const { listings, populateListings, users, populateUsers } = require('./seed/seed');

beforeEach(populateUsers);
// beforeEach(populateListings);

describe('POST /users', function () {
  it('should create a new user', function(done) {
    let email = 'ghandi@india.com';
    let password = 'Abc123!!';
    let phone = 35678896122;
    let name = 'Kameush Ghandi';
    
    request(app)
      .post('/users')
      .send({
        email, password, phone, name
      })
      .expect(200)
      .expect((res) => {
        expect(res.headers['x-auth']).toBeTruthy();
        expect(res.body._id).toBeTruthy();
        expect(res.body.email).toBe(email);
        expect(res.body.password).not.toBeInstanceOf(String);
      })
      .end((err) => {
        if (err) {
          return done(err); 
        }

        User.findOne({email}).then((user) => {
          expect(user).toBeTruthy();
          expect(user.password).not.toBe(users[0].password);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should return validation error if email is invalid', function(done) {
    let user = {
      email: 'bademail',
      password: '123kiw23!',
      name: 'Nadia Paez',
      phone: 93827370123
    };
    // user.email = 'some@goodemail.com';

    request(app)
      .post('/users')
      .send(user)
      .expect(400)
      .end(done);
  });

  it('should return validation error if password is invalid', function(done) {
    let user = {
      email: 'goodboy@example.com',
      password: '123w',
      name: 'Paola Nadiar',
      phone: 3334441234
    };
   // user.password = 'some123Goodpass';

    request(app)
      .post('/users')
      .send(user)
      .expect(400)
      .end(done);
  });

  it('should not create a user if email in use', function(done) {
    let user = {
      email: users[0].email,
      password: '123wpass!!',
      name: 'Pareja Naranjo',
      phone: 3334441234
    };
 //  user.email = 'some@new.email';

    request(app)
     .post('/users')
     .send(user)
     .expect(400)
     .end(done);
  });
});

describe('POST /users/login', function() {
  it('should login user and return auth token', function(done) {
    let user = _.pick(users[0], ['email', 'password']);
    request(app)
      .post('/users/login')
      .send(user)
      .expect(200)
      .expect((res) => {
        expect(res.headers['x-auth']).toBeTruthy();
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        User.findById(users[0]._id).then((user) => {
          expect(user.tokens[1]).toMatchObject({
            access: 'auth',
            token: res.headers['x-auth']
          });
          done();
        }).catch((e) => done(e));
      })
  });

  it('should reject invalid login', function(done) {
    request(app)
      .post('/users/login')
      .send({
        email: users[1].email,
        password: users[1].password + 'abc1'
       // password: 'notTheRightPass' 
      })
      .expect(400)
      .expect((res) => {
        expect(res.headers['x-auth']).not.toBeTruthy();
      })
      .end((err, res) => {
        if (err) {
          done(err)
        }

        User.findById(users[1]._id).then((user) => {
          expect(user.tokens.length).toBe(1);
          done();
        }).catch((e) => done(e));
      });
  });
});

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

 it('should return validation error if request invalid', function(done) {
   let user = _
     .pick(users[0], ['name', 'phone', 'email', 'password']);
  // user.email = 'bademail';
   request(app)
     .post('/users')
     .send({ user })
     .expect(400)
     .end(done);
 });

  it('should not create a user if email in use', async function () {
    let user = _.pick(users[1], ['_id', 'name', 'phone', 'email', 'password']);
    //user.email = users[0].email;
    
    const pre = () =>
      request(app)
        .post('/users')
        .send(users[0])
        .expect(200);

    const req = () => 
      request(app)
        .post('/users')
        .send(user)
        .expect(400);
    
    await pre();
    const response = await req();
    const userDb = User.findOne({_id: user._id});
    expect(userDB).not.toBeTruthy();
  }

 it('should not create a user if email in use', function(done) {
   let user = _.pick(users[1], ['_id','name', 'phone', 'email', 'password']);
   user.email = users[0].email;
   
   let pre = () => {
     return new Promise((resolve, reject) => {
       request(app)
         .post('/users')
         .send(users[0])
         .expect(200)
         .end(); 
     });
   }
   let req = () => {
     return new Promise((resolve, reject) => {
     request(app)
       .post('/users')
       .send(user)
       .expect(400)
       .end((err, res) => {
         if (err) return done(err);
       
         User.findOne({
           _id: user._id
         }).then((userDB) => {
           expect(userDB).not.toBeTruthy();
           done();
         }).catch((e) => done(e));
       });
     });
   }
   
   Promise.all([pre, req]).catch((e) => done).then(() => done());
 });
});

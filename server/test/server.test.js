const expect = require('expect');
const request = require('supertest');
const { ObjectID } = require('mongodb');

const { app } = require('./../server');

const { Listing } = require('./../models/Listing');
const { Staff } = require('./../models/Staff');
const { User } = require('./../models/User');

const { listings, populateListings, users, populateUsers } = require('./seed/seed');

beforeEach(populateUsers);
// beforeEach(populateListings);

describe('POST /users', () => {
  it('should create a new user', (done) => {
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

 it('should return validation error if request invalid', (done) => {
   let user = users[0];
   user.email = 'bademail';

   request(app)
     .post('/users')
     .send({ user })
     .expect(400)
     .end(done);
 });

 it('should not create a user if email in use', (done) => {
   let userEmailInUse = users[1];
   userEmailInUse.email = users[0].email;
   
   request(app)
    .post('/users')
    .send(users[0])
    .expect(200)
    .end();

   request(app)
     .post('/users')
     .send(userEmailInUse)
     .expect(400)
     .end((err, res) => {
       if (err) return done(err);

       User.findOne({ email }).then((user) => {
         expect(user).not.toBeTruthy();
         done();
       }).catch((e) => done(e));
     });
 });
});

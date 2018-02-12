const { register } = require('./controllers/AuthenticationController.js');

module.exports = (app) => {    
  app.post('/users', register); 
};


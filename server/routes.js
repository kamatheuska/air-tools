const AuthController = require('./controllers/AuthenticationController.js');

module.exports = (app) => {    
  app.get('/', AuthController.getRoot);
  app.post('/register', AuthController.register); 
};


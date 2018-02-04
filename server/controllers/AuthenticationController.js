const path = require('path');

module.exports = {
  register(req, res) {
    res.send({
      message: `Hello ${req.body.email}, Your user was registered!`,
    });
  },
  getRoot(req, res) {
    res.status(200).sendFile(`${path.dirname(__dirname)}/client/dist/index.html`);
  },
};


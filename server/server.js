require('./config/config');

const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const morgan = require('morgan');


const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('combined'));
app.use(bodyParser.json());

require('./routes.js')(app);
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = { app };

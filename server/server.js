require('./config/config');

const express = require('express');
const path = require('path');
const { ObjectID } = require('mongodb');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const { mongoose } = require('./db/mongoose');
// Here come all the models required from ./models

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.dirname(__dirname) + '/dist/'));
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

console.log(process.env.NODE_ENV);


app.get('/', (req, res) => {
  res.status(200).sendFile(path.dirname(__dirname) + '/client/dist/index.html');
})

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}, Your user was registered!`
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

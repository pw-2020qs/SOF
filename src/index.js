const express = require('express');
const routes = require('../routes/api');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('../config/db');
const app = express();

connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

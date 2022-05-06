const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connect = require('./db/connect');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');

connect.initDatabase();

// connect using mongoose
// mongoose.connect(process.env.MONGODB_URI);
// mongoose.Prommise = global.Promise;

app.use(bodyParser.json());

// initialize routes
app.use('/', require('./routes'));

// Error handling middleware
app.use(function (err, req, res) {
  // console.log(err);
  res.status(422).send({ error: err.message });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

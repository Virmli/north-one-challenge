
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/todo-list')
    console.log('Mongo DB connection success.');
  } catch(err) {
    console.log(`Mongo DB connection error: ${err}`);
    process.exit(1);
  }
}
// express
const app = express();
connectDB();
const { version } = require('../package.json');
// readiness & liveness probe endpoint
app.get('/version', (req, res) => {
  res.json({ version });
});

// 3rd party middleware
app.use(bodyParser.json(config.bodyParser));

app.use(require('./routes'));

// export server
module.exports = http.createServer(app);

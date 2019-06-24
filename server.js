// Dependancies
const express = require('express');
const bodyParser = require('body-parser');
const test = require('./server/middleware/middleware');

// DB connection
require('./server/config/db');

const app = express();

// Configure express to use bodyParser() to get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
const apiRoutes = require('./server/routes/routers');


// Middleware
app.use(test.index);

// Register routes
app.use('/', apiRoutes);

// Start server
app.listen(process.env.PORT || 8080, () => {
  console.log('Listening to port');
});

module.exports = app;

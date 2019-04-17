require('dotenv').config()

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const indexRouter = require('./routes/index');

// Set cross-origin
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin, X-Requested-With");
//   next();
// });


// Static File Service
app.use(express.static(path.join(__dirname, '../client/build')));

// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Link Routers
app.use('/api/', indexRouter);


module.exports = app;

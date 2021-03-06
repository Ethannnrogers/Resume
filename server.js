var express = require('express');
var bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var path = require('path');
var htmlRoutes = require('./app/routes/htmlRoutes.js');
require('dotenv').config();
var app = express();
var PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static(__dirname + "public"));

htmlRoutes(app); 

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
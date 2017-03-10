var express = require("express");
var app = module.exports = express();
app.mongoose = require("mongoose");

var config = require("./config.js")(app, express);

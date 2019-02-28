//Required Packages
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const path = require("path");
// Require all models
const db = require("./models");

const PORT = process.env.PORT || 3003;

// Initialize Express
const app = express();
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Routes
const routes = require("./routes");
// All requests go through routes
app.use(routes);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/fakereddit";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
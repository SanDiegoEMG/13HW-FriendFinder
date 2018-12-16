// Dependencies
var express = require("express");
var path = require("path");


// Express server configuration - set-up basic principles

var app = express();  // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 3000;  // Listen for and set default port

// Sets up the Express to accept the following data forms from POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Connect with other .js files so their code is accessble
require(`./app/routing/apiRoutes.js`) (app);
require(`./app/routing/htmlRoutes.js`) (app);


// LISTENER - need one of these with any server program - effectively "starts" the server
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
// Dependencies
var express = require("express");
var path = require("path");


// Express server configuration - set-up basic principles

var app = express();  // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 3000;  // Listen for and set default port

// Sets up the Express to accept the following data forms from POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Data =====================================================
var friends = [
  {
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
    "scores": [
      "5",
      "1",
      "4",
      "4",
      "5",
      "1",
      "2",
      "5",
      "4",
      "1"
    ]
  },
]
// Data =====================================================


// Connect with other .js files so their code is accessble
require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes");


// Routing users to html pages
app.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

// Data (api) routes


app.get("/api/friends", function (req, res) {
  res.json(friends);
});


app.post("/api/friends", function(req, res) {
  var newPerson = req.body;
  console.log(newPerson);
  friends.push(newPerson);
  res.json(newPerson);
});


// catch all for anything not specifically declared above
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

// LISTENER - need one of these with any server program - effectively "starts" the server
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
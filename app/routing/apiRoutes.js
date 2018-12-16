var path = require("path");

// Connect to .js with friend array in it
var friendArray = require("../data/friends");


module.exports = function (app) {
  // Data (api) routes
  app.get("/api/friends", function (req, res) {
    res.json(friendArray);
  });

  app.post("/api/friends", function (req, res) {
    var newPerson = req.body;
    console.log(newPerson);
    friendArray.push(newPerson);
    res.json(newPerson);
  });
}
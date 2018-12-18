var path = require("path");

// Connect to .js with friend array in it
var friendArray = require("../data/friends");

module.exports = function (app) {
  // Data (api) routes
  app.get("/api/friends", function (req, res) {
    res.json(friendArray);
  });



  app.post("/api/friends", function (req, res) {
    // store incoming 'post' info in a variable 
    var newPerson = req.body;
    // add incoming 'post' info into friends array (friends.js)
    friendArray.push(newPerson);

    var scoresNew = newPerson.scores;
    var newPersonTotal = 0;

  // isolating the scores for the survey input      
    for (var i = 0; i < scoresNew.length; i++) {
      newPersonTotal += Number(scoresNew[i]);
    };

    console.log("newPersonTotal = " + newPersonTotal)

      // finding the total scores of people in the array
    for (var i = 0; i < friendArray.length; i++) {
      var arrayPerson = friendArray[i]
      var total = 0;
      for (var j = 0; j < arrayPerson.scores.length; j++) {
        total += Number(arrayPerson.scores[j]);
      }
      arrayPerson.sum = total;
    }

    // comparing survey input to array
    for (var k = 0; k < friendArray.length - 1; k++) {
      var diff = friendArray[k].sum - newPersonTotal;
      console.log("diff = " + diff);
      if (diff === 0) {
        var data = friendArray[k].name;
        console.log(data)
        break;
      }
    }
  });
}

// Dependencies
var path = require("path");

// Routing to html page files


//     app.get("*", function(req, res) {
//       res.sendFile(path.join(__dirname, "../public/home.html"));
//     });


// Routing users to html pages
module.exports = function (app) {
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    // catch all for anything not specifically declared above
    // app.get("*", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/home.html"));
    // });
};
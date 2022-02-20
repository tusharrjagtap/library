///load express
var express = require("express");
var app = express();


var bodyparser = require("body-parser");


//define middleware
app.use(bodyparser.urlencoded({ extended: false }));


///define routes
app.get("/", function(req, res) {
    res.sendFile("/index.html", { root: __dirname });

})



app.listen(3000);
console.log("server is running on port 3000");

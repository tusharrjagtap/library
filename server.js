///load express
var express = require("express");
var app = express();
var mongoop = require("./db/mongooperations");

var bodyparser = require("body-parser");


//define middleware
app.use(bodyparser.urlencoded({ extended: false }));


///define routes
app.get("/", function(req, res) {
    res.sendFile("public/empdata.html", { root: __dirname });

})

app.post("/submit_data", function(req, res) {
    var empid = req.body.empid;
    console.log(empid + "  " + req.body.ename + "  " + req.body.sal)
    mongoop.savedata(req.body);
    res.send(empid + "submitted successfully");
})

app.listen(3000);
console.log("server is running on port 3000");

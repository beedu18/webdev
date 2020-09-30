const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//home route
app.get("/", function(req, res) {
    // console.log(req);
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    console.log(req.body);
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    res.send("Result is " + (n1+n2));
});


app.get("/bmi", function(req, res) {
    // console.log(req);
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/bmi", function(req, res) {
    console.log(req.body);
    var w = Number(req.body.weight);
    var h = Number(req.body.height);
    var result = w/(h*h);
    res.send("Body Mass Index is: " + result.toFixed(2) + " kg/m<sup>2</sup>");
});

app.listen(5000, function() { 
    console.log("listening on port 5000") 
});
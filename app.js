const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

//initilize Express
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

//initilize EJS
app.set('view engine', 'ejs');

//use the public folder for the data
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home");
});

app.post("/results", function(req, res){
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  var range = "";


  const result = (((weight)/(height*height))*10000).toFixed(1);

  if (result <= 18.5) {
    range = "You are in the underweight weight range";
  } else if (result <= 18.5 || result <= 24.9) {
    range = "You are in the healthy weight range";
  } else if(result <= 25 || result <= 29.9) {
    range = "You are in the overweight range";
  } else if(result >= 30) {
    range = "You are in the obese range";
  }

  res.render("results", {result: result, range: range});
});



app.listen(3000, function(){
  console.log("Server started at port 3000");
});

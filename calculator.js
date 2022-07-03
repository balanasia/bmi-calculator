const express = require("express");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

//initilize Express
const app = express();
//initilize EJS
app.set('view engine', 'ejs');

//use the public folder for the data
app.use(express.static("public"));

app.get("/", function(req, res){
  res.redner("home");
});

app.post("/results", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = weight/(height*height);
  res.send("Your BMI is "+ result);
});

app.listen(3000, function(){
  console.log("Server started at port 3000");
});

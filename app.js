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

  const result = (((weight)/(height*height))*10000).toFixed(1);
  console.log(result);

  res.render("results");
});



app.listen(3000, function(){
  console.log("Server started at port 3000");
});

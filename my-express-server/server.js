//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(request, response){
  response.sendFile(__dirname+"/index.html");
})

app.post("/", function(req,res){
  res.send(Number(req.body.num1)+Number(req.body.num2));
})

app.get("/contact", function(req,res){
  res.send("contactez moi au mail suivant: thomas.belloc@equadex.net")
})

app.get("/about", function(req,res){
  res.send("Je m'appele Thomas Belloc, j'aime le code et la bière")
})

app.get("/hobbies", function(req,res){
  res.send("La bière, la montagne et les trucs de geek")
})

app.listen(3000, function(){
  console.log("Server started on port 3000");
});

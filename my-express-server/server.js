//jshint esversion: 6

const express = require("express");
const app = express();

app.get("/", function(request, response){
  response.send("<h1>Hello</h1>");
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

//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})

app.post("/", function(req,res){
    var firstName = req.body.nom;
    var lastName = req.body.prenom;
    var email = req.body.email;

    console.log(firstName + "  " + lastName + "  " + email);
})

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html")
})
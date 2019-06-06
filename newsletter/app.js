//jshint esversion: 6
const config = require('./config');

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

    var data ={
                "email_address": email,
                "status" : "subscribed",
                "merge_fields": {
                    FNAME:firstName,
                    LNAME: lastName
                }
            };

    var options = {
        "url": "https://us20.api.mailchimp.com/3.0/lists/c9b9a6e109/members/",
        "method": "POST",
        "headers": {
            "Authorization": "thomas "+ config.mailchimpKey
        },
        "body": data,
        "json": true
    };

    request(options, function(error, response, body){
        if(error)
        {
            console.log(error);
        }
        else{
           console.log(response);
        }
    })
})

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html")
})
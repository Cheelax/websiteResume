//Partie index
//jshint esversion : 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

//Store all JS and CSS
app.use(express.static(__dirname + '/'));

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

//App

    //Bitcoin
    app.get("/Btc/", function(req, res){
        res.sendFile(__dirname + "/Apps/Bitcoin-Ticker/index.html");
    })

    app.post("/Btc/" ,function(req,res){
        var crypto=  req.body.crypto;
        var fiat = req.body.fiat;
    
        var amount = req.body.amount
    
        var options = {
            url: "https://apiv2.bitcoinaverage.com/convert/global",
            method: "GET",
            qs: {
                from: crypto,
                to:fiat,
                amount:amount
            }
        }
        request(options, function(error, response, body){
            var data = JSON.parse(body);
            var price = data.price;
            console.log(price);
            var currentDate = data.time;
    
            res.write("<p> la date du jour est : " + currentDate + "</p>")
            res.write("<h1> " + amount + crypto + " vaut : " + price + fiat +"</h1>")
    
            res.send();
        })
    })
    //Dicee

    app.get("/Dicee/", function(req, res){
        res.sendFile(__dirname + "/Apps/Dicee/dicee.html");
    })
    //Drum

    app.get("/Drum/", function(req,res){
        res.sendFile(__dirname + "/Apps/Drum Kit/index.html")
    })
    //newsletter

    app.get("/Newsletter/", function(req,res){
        res.sendFile(__dirname + "/Apps/newsletter/signup.html")
    })

    app.post("/Newsletter/", function(req,res){
        
        const config = require(__dirname + "/Apps/newsletter/config.js");
        var firstName = req.body.nom;
        var lastName = req.body.prenom;
        var email = req.body.email;
    
        var data ={
                    "email_address": email,
                    "status" : "subscribed",
                    "merge_fields": {
                        FNAME: firstName,
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
               res.sendFile(__dirname + "/Apps/newsletter/failure.html")
            }
            else{
              if(response.statusCode == 200){
                res.sendFile(__dirname + "/Apps/newsletter/success.html")
              }
              else{
               res.sendFile(__dirname + "/Apps/newsletter/failure.html")
              }
            }
        })
    })
    
    app.post("/failure", function(req,res){
        res.redirect("/Newsletter/");
    });
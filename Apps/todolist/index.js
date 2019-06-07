//Partie index
//jshint esversion : 6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine","ejs");

app.listen(3000, function(req,res){  
})

app.get("/", function(req,res) {
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    switch (currentDay) {
        case 0:
            day="Dimanche";
            break;
        case 1:
            day="Lundi";
            break;
        case 2:
            day="Mardi";
            break;
        case 3:
            day="Mercredi";
            break;
        case 4:
            day="Jeudi";
            break;
        case 5:
            day="Vendredi";
            break;
        case 6:
            day="Samedi";
            break;
        default:
            console.log("erreur de parsing du jour" + currentDay);
    }

       res.render("list",{ day: day});
       res.send();
    }
)
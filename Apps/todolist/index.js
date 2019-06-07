//Partie index
//jshint esversion : 6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(req,res){  
})

var items = [];

app.get("/", function(req,res) {
    
    var today = new Date();

    var options = { weekday: 'long', month: 'long', day: 'numeric' };

    var day= today.toLocaleDateString("fr-FR",options);

       res.render("list",{ day: day, newListItems: items});
       console.log(today);
       console.log(day);
    }
)

app.post("/", function(req,res) {
    var item=req.body.newItem;
    items.push(item);
    res.redirect("/");
})
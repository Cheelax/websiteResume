//Partie index
//jshint esversion : 6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.listen(3000, function(req,res){
    console.log("Server is running on port 3000");  
})

var items = [];

var workItems = [];

app.get("/", function(req,res) {
    
    var today = new Date();

    var options = {weekday: 'long',day: 'numeric',month: 'long', year: 'numeric'};

    var day= today.toLocaleDateString("fr-FR",options);
       res.render("list",{ listTitle: day, newListItems: items});
    }
)

app.post("/", function(req,res) {
    var item=req.body.newItem;
    console.log(req.body);
    if(req.body.list == "travail")
    {
        workItems.push(item);
        res.redirect("/work")
    }
    else{
        items.push(item);
        res.redirect("/");
    }
})

app.get("/work",function(req,res){
    var today = new Date();

    var options = {weekday: 'long',day: 'numeric',month: 'long', year: 'numeric'};

    var day= today.toLocaleDateString("fr-FR",options);
    res.render("list", {listTitle: "travail", newListItems: workItems})
})

app.post("/work", function(req,res) {
    var workItems=req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();

let items = [];
let workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const today = date.getDate();
    
    // searches for list.ejs template in views/ directory
    res.render("list", {header: today, newItems: items}); 
});

app.post("/", (req, res)=> {
    let item = req.body.newItem;
    if(item!="") {
        if(req.body.listType==="Work") {
            workItems.push(item);
            res.redirect("/work");
        }
        else {
            items.push(item);
            res.redirect("/");
        }   
    }
    console.log(item);
});

app.get("/work", (req, res) => {
    res.render("list", {header: "Work List", newItems: workItems});
});

app.get("/dummy", (req, res) => {
    res.render("dummyLayout");
})

app.listen(3000, () => {
    console.log("Server Started");
});

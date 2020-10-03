const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const date = new Date(); 
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };
    const today = date.toLocaleDateString("en-US", options);
    
    // searches for list.ejs template in views/ directory
    res.render("list", {theDay: today, newItems: items}); 
});

app.post("/", (req, res)=> {
    let item = req.body.newItem;
    if(item!="")
        items.push(item);
    console.log(item);
    res.redirect("/")
});

app.listen(3000, () => {
    console.log("Server Started");
});

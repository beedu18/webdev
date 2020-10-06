const express = require("express");
const bodyParser = require("body-parser");
// const date = require(__dirname+"/date.js");
const mongoose = require("mongoose");

//initialize express
const app = express();

//use the modules
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//connect to database
mongoose.connect("mongodb://localhost:27017/todolistDB", 
    { useNewUrlParser: true, useUnifiedTopology: true });

//create schema
const itemSchema = {
    name: {
        type: String,
        required: [true, "No item specified"]
    }
};

//model the database
const Item = mongoose.model("Item", itemSchema);

//make dummy documents
const item1 = new Item({
    name: "You can Edit an entry"
});

const item2 = new Item({
    name: "Delete it once it's done"
});

const item3 = new Item({
    name: "Or strike it off"
});

//configure routes
app.get("/", (req, res) => {
    // const today = date.getDate();
    Item.find({}, (err, items) => {
        if(err)
            console.log(err);
        else {
            // console.log(items);
            if(items.length===0) {
                //add dummy items to the collection
                Item.insertMany([item1, item2, item3], (err) => {
                    if(err)
                        console.log(err);
                    else
                        console.log("dummy entry successful");
                });

                //redirect to home route again to show
                res.redirect("/"); 
            }
            else {
                // searches for list.ejs template in views/ directory
                res.render("list", {header: "Today", newItems: items}); 
            }
        }    
    });
    // res.send("hello"); 
});

app.post("/", (req, res)=> {
    let item = req.body.newItem;
    if(item!="") {
        if(req.body.listType==="Work") {
            workItems.push(item);
            res.redirect("/work");
        }
        else {
            const newItemDocument = new Item({
                name: item
            });
            newItemDocument.save();
            // items.push(item);
            res.redirect("/");
        }   
    }
    // console.log(item);
});

app.post("/delete", (req, res) => {
    // console.log(req.body)
    let id = req.body.id;
    Item.findByIdAndRemove(id, err => {
        if(err)
            console.log(err);
        else {
            // console.log("Deleted Successfully");
            res.redirect("/");
        }
    });
});

app.get("/work", (req, res) => {
    res.render("list", {header: "Work List", newItems: workItems});
});

app.get("/dummy", (req, res) => {
    res.render("dummyLayout");
});

app.listen(3000, () => {
    console.log("Server Started");
});

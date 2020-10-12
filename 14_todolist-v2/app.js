const express = require("express");
const bodyParser = require("body-parser");
// const date = require(__dirname+"/date.js");
const mongoose = require("mongoose");
const _ = require("lodash");

//initialize express
const app = express();

//use the modules
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

//connect to database
mongoose.connect("mongodb://localhost:27017/todolistDB", 
    {   
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);

//create item schema
const itemSchema = {
    name: {
        type: String,
        required: [true, "No item specified"]
    }
};

//create list schema for custom lists
const listSchema = {
    name: String,
    items: [itemSchema]
};

//model the database
const Item = mongoose.model("Item", itemSchema);
const List = mongoose.model("List", listSchema);

//make dummy documents
const item1 = new Item({
    name: "You can Edit an entry (hopefully)"
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
        if (err)
            console.log(err);
        else {
            // searches for list.ejs template in views/ directory
            res.render("list", { header: "Today", newItems: items });
        }
    });
    // res.send("hello"); 
});

app.post("/", (req, res) => {
    let item = req.body.newItem;
    let listName = req.body.listName;
    // console.log(`item: ${item}  listName: ${listName}`);
    if (item != "") {
        const newItemDocument = new Item({
            name: item
        });
        if (listName === "Today") {
            newItemDocument.save();
            res.redirect("/");
        } else {
            List.findOneAndUpdate({name: listName}, 
                {$push: {items: newItemDocument}},
                (err, success) => {
                    if(!err)
                        res.redirect("/"+listName);
                }
            ); 
        }
    }
    else {  //empty item
        (listName === "Today")
        ? res.redirect("/")
        : res.redirect("/"+listName);
    }
});

//set up delete route
app.post("/delete", (req, res) => {
    // console.log(req.body);
    let id = req.body.id;
    let listName = req.body.listName;
    if(listName === "Today") {
        Item.findByIdAndDelete(id, err => {
            if(!err)
                res.redirect("/");
        });        
    }
    else {
        List.findOneAndUpdate({name: listName},
            {$pull: {items: {_id: id}}},
            (err, success) => {
                if(!err)
                    res.redirect("/"+listName);
            }
        );
    }
});

//Custom Routes
app.get("/:customRoute", (req, res) => {
    // console.log(req.params.customRoute);
    const customListName = _.capitalize(req.params.customRoute);

    const list = new List({
        name: customListName,
        items: []
    });

    List.findOne({ name: customListName }, (err, found) => {
        if (err)
            console.log(err);
        else {
            if (!found) {
                list.save();
                res.redirect("/" + customListName);
            } else
                res.render("list", { header: found.name, newItems: found.items });
        }
    });
    // res.redirect("/");
});

// app.get("/dummy", (req, res) => {
//     res.render("dummyLayout");
// });

app.listen(3000, () => {
    console.log("Server Started");
});
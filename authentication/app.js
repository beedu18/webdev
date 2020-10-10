require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

userSchema.plugin(encrypt, {secret: process.env.CODE, encryptedFields: ["password"]});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {
    const user = new User({
        email: req.body.username,
        password: req.body.password
    });

    user.save(err => {
        if(!err) {
            console.log("User Added");
            res.render("login");
        }
        else
            res.send(err);
    });
})

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {
    const email = req.body.username;
    const password = req.body.password;
    // console.log(`email: ${email} password: ${password}`);
    User.findOne({email: email}, (err, found) => {
        if(!err) {
            if(found) {
                if(found.password === password)
                    res.render("secrets");
                else
                    res.send("Incorrect Password");
            }
            else
                res.send("No User Found");
        }
        else
            res.send(err);
    })
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
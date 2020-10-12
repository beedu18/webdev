require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

// const bcrypt = require("bcrypt");
// const saltRounds = 10;
// const md5 = require("md5");
// const encrypt = require("mongoose-encryption");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use(session({
    secret: process.env.CODE,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(encrypt, {secret: process.env.CODE, encryptedFields: ["password"]});

const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {
    User.register({username: req.body.username}, req.body.password, (err, user) => {
        if(!err) {
            passport.authenticate("local")(req, res, () => {
                res.redirect("/secrets");
            });
        }
        else {
            console.log(err);
            res.redirect("/register");
        }
    });
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.passwprd
    });

    req.login(user, err => {
        if(!err){
            passport.authenticate("local")(req, res, () => {
                res.redirect("/secrets");
            });
        }
        else {
            console.log(err);
            res.redirect("/");
        }
    });
});

app.get("/secrets", (req, res) => {
    if(req.isAuthenticated()) {
        res.render("secrets");
    }
    else
        res.redirect("/login");
});

app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});